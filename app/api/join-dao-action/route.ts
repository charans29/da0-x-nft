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
    disabled: count === fractions,
    links: {
      actions: [
        {
          label: count === fractions ? "My DAO's Filled!" : "Join",
          href: request.url,
        },
      ],
    },
  };

  return new Response(JSON.stringify(payload), {
    headers: ACTIONS_CORS_HEADERS,
  });
}

export const POST = async (req: Request) => {
  try {
    const body: ActionPostRequest = await req.json();
    const requestURL = new URL(req.url);

    // Get parameters from the URL
    const idx = requestURL.searchParams.get('nft_id');
    const countStr = requestURL.searchParams.get('mbrs');
    const fractionsStr = requestURL.searchParams.get('frcn');

    // Validate the required parameters
    if (!idx || !countStr || !fractionsStr) {
      return new Response(
        JSON.stringify({ message: 'Missing required parameters' }),
        { status: 400, headers: ACTIONS_CORS_HEADERS }
      );
    }

    const count = parseInt(countStr);
    const fractions = parseInt(fractionsStr);

    // Ensure the count doesn't exceed the fractions (max limit)
    if (count >= fractions) {
      return new Response(
        JSON.stringify({ message: "DAO is already full" }),
        { status: 400, headers: ACTIONS_CORS_HEADERS }
      );
    }

    let account: PublicKey;
    try {
      account = new PublicKey(body.account);
    } catch (err) {
      return new Response(
        JSON.stringify({ message: 'Invalid "account" provided' }),
        { status: 400, headers: ACTIONS_CORS_HEADERS }
      );
    }

    const connection = new Connection(
      process.env.SOLANA_RPC! || clusterApiUrl("devnet")
    );

    // Private key for authority (this should be secured in env)
    let daoActionAuthorityPrivateKey = JSON.parse(process.env.DAO_ACTION_AUTHORITY || '');
    const actionAuthority = Keypair.fromSecretKey(Uint8Array.from(daoActionAuthorityPrivateKey));

    // Transaction to trigger the DAO join action
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: account,
        toPubkey: actionAuthority.publicKey,
        lamports: 1,
      }),
      new TransactionInstruction({
        programId: new PublicKey(MEMO_PROGRAM_ID),
        data: Buffer.from(`Joined DAO for NFT: ${idx}`, "utf8"),
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

    // Increment the count and prepare the response
    const newCount = count + 1;
    const assetVal = NFTs[parseInt(idx)].floorPrice;
    const iconURL = new URL(NFTs[parseInt(idx)].image ?? "", requestURL.origin);

    const responsePayload: ActionGetResponse = {
      icon: iconURL.toString(),
      description: `NFT Value: ${assetVal} • Current members: ${newCount}/${fractions}`,
      title: newCount === fractions ? "DAO's Ready. Let’s Flip! 🔥" : "Join MY DAO",
      label: newCount === fractions ? "DAO Full" : "Join DAO",
      disabled: newCount === fractions,  // Disable button if DAO is full
      links: {
        actions: [
          {
            label: newCount === fractions ? "DAO Full" : "Join",
            href: "#",  // Action is disabled if full
            // disabled: newCount === fractions,
          },
        ],
      },
    };

    // Return the response with the updated count and transaction
    return new Response(JSON.stringify(responsePayload), {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (err) {
    console.log(err);
    let message = "An unknown error occurred";
    if (typeof err === "string") message = err;

    // Return the error as a valid JSON response
    return new Response(
      JSON.stringify({ message: message }),
      { status: 400, headers: ACTIONS_CORS_HEADERS }
    );
  }
};



export async function OPTIONS(request: Request) {
  return new Response(null, {
    headers: ACTIONS_CORS_HEADERS,
  });
}