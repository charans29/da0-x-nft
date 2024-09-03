import {
    ActionGetResponse,
    ACTIONS_CORS_HEADERS,
  } from "@solana/actions";
  import DAOs from './DAOs';
  
  export const GET = (request: Request) => {
    const requestURL = new URL(request.url);
    const id = requestURL.searchParams.get('id');
    const daoIndex = parseInt(id ?? "");
    const dao = DAOs[daoIndex];
    const { count, fractions, asset } = dao;
    const iconURL = new URL(asset ?? "", requestURL.origin);
  
    const payload: ActionGetResponse = {
      type: "action",
      title: "Join DAO",
      description: `Join this DAO. Current members: ${count}/${fractions}`,
      icon: iconURL.toString(),
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