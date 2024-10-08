import DAOs from "@/pages/api/DAOs";
import NFTs from "@/pages/api/NFTs";
import {
  ACTIONS_CORS_HEADERS,
  ActionGetResponse,
} from "@solana/actions";

  
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

export async function POST(request: Request) {
  const requestURL = new URL(request.url);
  const id = requestURL.searchParams.get('id');
  const daoIndex = parseInt(id ?? "");

  if (isNaN(daoIndex) || !DAOs[daoIndex]) {
    return new Response("Invalid DAO ID", { status: 400 });
  }

  if (DAOs[daoIndex].count !== DAOs[daoIndex].count) DAOs[daoIndex].count += 1;

  const dao = DAOs[daoIndex];
  const { count, fractions, asset } = dao;
  const iconURL = new URL(asset ?? "", requestURL.origin);

  const payload: ActionGetResponse = {
    icon: iconURL.toString(),
    description: `Join this DAO. Current members: ${count}/${fractions}`,
    title: "Join DAO",
    label: "Join DAO",
    links: {
      actions: [
        {
          label: "Join",
          href: request.url,
        },
      ],
    },
  };

  return new Response(JSON.stringify(payload), {
    headers: ACTIONS_CORS_HEADERS,
  });
}


export async function OPTIONS(request: Request) {
  return new Response(null, {
    headers: ACTIONS_CORS_HEADERS,
  });
}