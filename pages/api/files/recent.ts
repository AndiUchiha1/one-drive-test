import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const data = await axios.get("https://graph.microsoft.com/v1.0/me/drive/recent", { headers: { "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TOKEN_MGH}` } })
    res.status(200).json(data?.data)
  }
}
