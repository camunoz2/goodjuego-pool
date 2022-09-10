import { Redis } from '@upstash/redis'
import { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN
  })


  const proyectName = 'gjpool'
  const gameName = req.body

  await redis.incr(`${proyectName}:${gameName}`)
  const votes = await redis.get(`${proyectName}:${gameName}`)
  
  res.status(200).json(votes)
}
