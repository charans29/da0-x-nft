
import { createActionHeaders, type ActionsJson } from "@solana/actions";

export const GET = async () => {
  const payload: ActionsJson = {
    rules: [
      // map all root level routes to an action
      {
        pathPattern: "/*",
        apiPath: "/pages/api/*",
      },
      // idempotent rule as the fallback
      {
        pathPattern: "/pages/api/**",
        apiPath: "/pages/api/**",
      },
    ],
  };

  return Response.json(payload, {
    headers: createActionHeaders(),
  });
};

export const OPTIONS = GET;
