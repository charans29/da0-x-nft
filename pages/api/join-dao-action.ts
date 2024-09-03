import type { NextApiRequest, NextApiResponse } from 'next';
import {
  createActionHeaders,
  ActionGetResponse,
} from "@solana/actions";
import DAOs from './DAOs';

export const GET = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const headers = createActionHeaders();
  const { id } = req.query;
  const daoIndex = parseInt(id as string);
  const dao = DAOs[daoIndex];
  const { count, fractions, asset } = dao;

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

  res.status(200).json(payload), {
    headers,
  };
}

export const OPTIONS = GET;