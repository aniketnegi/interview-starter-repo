import type { NextApiRequest, NextApiResponse } from 'next'
import { randomUUID } from 'crypto'


export async function GET() {
  return Response.json({
    jobId: randomUUID(),
  })
}

export async function POST() {
  return Response.json({
    jobId: randomUUID(),
  })
}
