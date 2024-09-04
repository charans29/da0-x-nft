import DAOs from "@/pages/api/DAOs";
import {
    ActionGetResponse,
    ActionPostResponse,
    ACTIONS_CORS_HEADERS,
  } from "@solana/actions";
import { clusterApiUrl, Connection, Keypair, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

  
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

    const userPublicKey = new Keypair().publicKey;
    const treasuryPublicKeyString = 'GjMoMZJUzSf5j6jQ5CnU7vLivQYUuB5FLf1vCPhDLnYo'; // Replace with actual treasury public key
    const treasuryPublicKey = new PublicKey(treasuryPublicKeyString);
   
    const tx = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: userPublicKey,
        toPubkey: treasuryPublicKey,
        lamports: 1
      })
    );

    const serializedTx = tx.serialize({
      requireAllSignatures: false, 
      verifySignatures: false
    }).toString("base64");

    if (isNaN(daoIndex) || !DAOs[daoIndex]) {
      return new Response("Invalid DAO ID", { status: 400 });
    }
    
    if(DAOs[daoIndex].count !== DAOs[daoIndex].fractions){
      DAOs[daoIndex].count += 1;
    }

    const payload: ActionPostResponse = {
      transaction: serializedTx,
      message: "Done! You've joined the DAO!",
    };

    const response = Response.json(payload, { headers: ACTIONS_CORS_HEADERS });
    
    return response
  }

  export async function OPTIONS(request: Request) {
    return new Response(null, {headers: ACTIONS_CORS_HEADERS})
  }