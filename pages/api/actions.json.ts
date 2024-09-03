import { createActionHeaders, type ActionsJson } from "@solana/actions";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ActionsJson>
) {
  res.setHeader('Content-Type', 'application/json');

  const headers = createActionHeaders();
  for (const key in headers) {
    if (headers.hasOwnProperty(key)) {
      res.setHeader(key, headers[key]);
    }
  }

  const payload: ActionsJson = {
    rules: [
      {
        pathPattern: "/*",
        apiPath: "/api/actions/*",
      },
      {
        pathPattern: "/api/actions/**",
        apiPath: "/api/actions/**",
      },
    ],
  };

  res.status(200).json(payload);
}