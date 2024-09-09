import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).send('Bad Request');
  }

  try {
    const response = await fetch(url);
    const contentType = response.headers.get('content-type');

    if (!response.ok || !contentType) {
      return res.status(500).send('Failed to fetch the image');
    }

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error('Failed to fetch image:', error);
    res.status(500).send('Internal Server Error');
  }
}
