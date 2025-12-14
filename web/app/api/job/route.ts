import type { NextApiRequest, NextApiResponse } from 'next'
import { randomUUID } from 'crypto'


type ResponseData = {
  jobId: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const randomUUID = crypto.randomUUID()
  res.status(200).json({ jobId: randomUUID.toString() })
}
