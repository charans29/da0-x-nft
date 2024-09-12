import DAOs from "@/pages/api/DAOs";
import NFTs from "@/pages/api/NFTs";
import {
  ActionPostResponse,
  ACTIONS_CORS_HEADERS,
  createPostResponse,
  MEMO_PROGRAM_ID,
  ActionGetResponse,
  ActionPostRequest,
} from "@solana/actions";
import {
  clusterApiUrl,
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
  
export async function GET(request: Request) {
  const requestURL = new URL(request.url);
  const idx = requestURL.searchParams.get('nft_id');
  const count = requestURL.searchParams.get('mbrs');
  const fractions = requestURL.searchParams.get('frcn');
  
  if (!idx || !count || !fractions) {
    return new Response('Missing required parameters', { status: 400 });
  }

  const assetVal = NFTs[parseInt(idx)].floorPrice;
  const iconURL = new URL(NFTs[parseInt(idx)].image ?? "", requestURL.origin);
  
  const payload: ActionGetResponse = {
    icon: iconURL.toString(),
    description: `NFT Value: ${assetVal} • Current members: ${count}/${fractions}`,
    title: count === fractions ? "DAO's Ready. Let’s Flip! 🔥" : "Join MY DAO",
    label: "Join DAO",
    links: {
      actions: [
        {
          label: "Join",
          href: request.url,
          // disabled: false
        },
      ],
    },
  };

  return new Response(JSON.stringify(payload), {
    headers: ACTIONS_CORS_HEADERS,
  });
}

// export async function POST(request: Request) {
//   const requestURL = new URL(request.url);
//   const id = requestURL.searchParams.get('id');
//   const daoIndex = parseInt(id ?? "");

//   if (isNaN(daoIndex) || !DAOs[daoIndex]) {
//     return new Response("Invalid DAO ID", { status: 400 });
//   }

//   if (DAOs[daoIndex].count !== DAOs[daoIndex].count) DAOs[daoIndex].count += 1;

//   const dao = DAOs[daoIndex];
//   const { count, fractions, asset } = dao;
//   const iconURL = new URL(asset ?? "", requestURL.origin);

//   const payload: ActionGetResponse = {
//     icon: iconURL.toString(),
//     description: `Join this DAO. Current members: ${count}/${fractions}`,
//     title: "Join DAO",
//     label: "Join DAO",
//     links: {
//       actions: [
//         {
//           label: "Join",
//           href: request.url,
//         },
//       ],
//     },
//   };

//   return new Response(JSON.stringify(payload), {
//     headers: ACTIONS_CORS_HEADERS,
//   });
// }


export const POST = async (req: Request) => {
  try {
    const body: ActionPostRequest = await req.json();
    const requestURL = new URL(req.url);

    const daoIndex = parseInt(requestURL.searchParams.get('id') ?? "");
    if (isNaN(daoIndex) || !DAOs[daoIndex]) {
      return new Response("Invalid DAO ID", { status: 400 });
    }

    let account: PublicKey;
    try {
      account = new PublicKey(body.account);
    } catch (err) {
      return new Response('Invalid "account" provided', {
        status: 400,
        headers: ACTIONS_CORS_HEADERS,
      });
    }

    const connection = new Connection(
      process.env.SOLANA_RPC! || clusterApiUrl("devnet")
    );

    // Private key for authority (this should be secured in env)
    let daoActionAuthorityPrivateKey = JSON.parse(process.env.DAO_ACTION_AUTHORITY || '');
    const actionAuthority = Keypair.fromSecretKey(Uint8Array.from(daoActionAuthorityPrivateKey));

    // Increment DAO count
    const dao = DAOs[daoIndex];
    dao.count += 1;

    // Transaction to trigger the DAO join action
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: account,
        toPubkey: actionAuthority.publicKey,
        lamports: 1,
      }),
      new TransactionInstruction({
        programId: new PublicKey(MEMO_PROGRAM_ID),
        data: Buffer.from(`Joined DAO: ${daoIndex}`, "utf8"),
        keys: [
          {
            pubkey: actionAuthority.publicKey,
            isSigner: true,
            isWritable: false,
          },
        ],
      })
    );

    transaction.feePayer = account;
    transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,
        message: "Successfully joined the DAO",
      },
      signers: [actionAuthority],
    });

    const iconURL = new URL(dao.asset ?? "", requestURL.origin);
    const responsePayload: ActionGetResponse = {
      icon: iconURL.toString(),
      description: `You have joined the DAO. Current members: ${dao.count}/${dao.fractions}`,
      title: "DAO's Ready. Let’s Flip! 🔥",
      label: "Joined",
      links: {
        actions: [
          {
            label: "Joined",
            href: "#", // Disable action after joining
            // disabled: true,
          },
        ],
      },
    };

    return new Response(JSON.stringify(responsePayload), {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (err) {
    console.log(err);
    let message = "An unknown error occurred";
    if (typeof err === "string") message = err;
    return new Response(message, {
      status: 400,
      headers: ACTIONS_CORS_HEADERS,
    });
  }
};

export async function OPTIONS(request: Request) {
  return new Response(null, {
    headers: ACTIONS_CORS_HEADERS,
  });
}