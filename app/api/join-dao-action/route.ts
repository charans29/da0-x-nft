import DAOs from "@/pages/api/DAOs";
import {
    ActionGetResponse,
    ACTIONS_CORS_HEADERS,
  } from "@solana/actions";

  
  export async function GET(request: Request){
    const requestURL = new URL(request.url);
    const id = requestURL.searchParams.get('id');
    const daoIndex = parseInt(id ?? "");
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
            href: ``,
          },
        ],
      },
    };
  
    const response = Response.json(payload, {headers: ACTIONS_CORS_HEADERS})

    return response
  
  }

  export async function OPTIONS(request: Request) {
    return new Response(null, {headers: ACTIONS_CORS_HEADERS})
  }