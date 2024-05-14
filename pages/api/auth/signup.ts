import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
    message: string
  }

  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
      const result = await Promise.resolve()
      res.status(200).json({ result })
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' })
    }
  }