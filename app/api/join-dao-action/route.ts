import DAOs from "@/pages/api/DAOs";
import NFTs from "@/pages/api/NFTs";
import {
    ActionGetResponse,
    ACTIONS_CORS_HEADERS,
  } from "@solana/actions";
  
  const findNftByImage = (imageUrl: string) => {
    return NFTs.find(nft => nft.image === imageUrl);
};

export async function GET(request: Request) {
    const requestURL = new URL(request.url);
    const id = requestURL.searchParams.get('id');
    const daoIndex = parseInt(id ?? "");
    const dao = DAOs[daoIndex];
    const { count, fractions, asset } = dao;

    const nft = asset ? findNftByImage(asset) : null;
    const assetVal = nft ? nft.floorPrice : 'Unknown';

    const iconURL = new URL(asset ?? "", requestURL.origin);

    const payload: ActionGetResponse = {
        icon: iconURL.toString(),
        description: `NFT Value: ${assetVal} • Current members: ${count}/${fractions}`,
        title: "Join DAO",
        label: "Join MY DAO",
        links: {
            actions: [
                {
                    label: "Join",
                    href: request.url
                },
            ],
        },
    };

    const response = Response.json(payload, { headers: ACTIONS_CORS_HEADERS });

    return response;
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
    label: "Join MY DAO",
    links: {
      actions: [
        {
          label: "Join",
          href: request.url,
        },
      ],
    },
  };

  const response = Response.json(payload, { headers: ACTIONS_CORS_HEADERS });
  return response;
}

  export async function OPTIONS(request: Request) {
  return new Response(null, { headers: ACTIONS_CORS_HEADERS });
}