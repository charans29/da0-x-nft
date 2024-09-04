import DAOs from "@/pages/api/DAOs";
import {
    ActionGetResponse,
    ActionPostResponse,
    ACTIONS_CORS_HEADERS,
  } from "@solana/actions";
import { Transaction } from "@solana/web3.js";

  
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
            href: request.url
          },
        ],
      },
    };
  
    const response = Response.json(payload, {headers: ACTIONS_CORS_HEADERS})

    return response
  
  }
  
  export async function POST(request: Request) {
    const requestURL = new URL(request.url);
    const id = requestURL.searchParams.get('id');
    const daoIndex = parseInt(id ?? "");
  
    if (isNaN(daoIndex) || !DAOs[daoIndex]) {
      return new Response("Invalid DAO ID", { status: 400 });
    }
    
    if(DAOs[daoIndex].count !== DAOs[daoIndex].fractions){
      DAOs[daoIndex].count += 1;
    }

    const tx = new Transaction();
    const serialTX = tx.serialize({requireAllSignatures: false, verifySignatures: false}).toString("base64");

    const response : ActionPostResponse = {
      transaction: serialTX,
      message: "DOne..Done..DONE!, you joine the DAO!"
    };
    return Response.json(response, {headers: ACTIONS_CORS_HEADERS})
  }

  export async function OPTIONS(request: Request) {
    return new Response(null, {headers: ACTIONS_CORS_HEADERS})
  }