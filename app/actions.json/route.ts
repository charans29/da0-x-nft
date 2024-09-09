import { ACTIONS_CORS_HEADERS, ActionsJson } from "@solana/actions";

export const GET = async () => {
  const payload: ActionsJson = {
    rules: [
      {
        pathPattern: "/**",
        apiPath: "/api/join-dao-action",
      },
      {
        pathPattern: "/api/join-dao-action/**",
        apiPath: "/api/join-dao-action/**",
      }
    ],
  };

  const extendedHeaders = {
    ...ACTIONS_CORS_HEADERS,
    "Access-Control-Allow-Origin": "https://api.dscvr.one",
  };

  return Response.json(payload, {
    headers: extendedHeaders,
  });
};

export const OPTIONS = GET;