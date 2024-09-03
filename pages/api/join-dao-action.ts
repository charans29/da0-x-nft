import type { NextApiRequest, NextApiResponse } from 'next';
import {
  createActionHeaders,
  ActionGetResponse,
} from "@solana/actions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const headers = createActionHeaders();
  const { asset, count, fractions } = req.query;

  const payload: ActionGetResponse = {
    type: "action",
    title: "Join DAO",
    description: `Join this DAO. Current members: ${count}/${fractions}`,
    icon: asset as string,
    label: "Join DAO",
    links: {
      actions: [
        {
          label: "Join",
          href: `https://your-backend-url.com/process-join?asset=${asset}&count=${count}&fractions=${fractions}`,
        },
      ],
    },
  };

  for (const [key, value] of Object.entries(headers)) {
    res.setHeader(key, value);
  }

  res.status(200).json(payload);
}