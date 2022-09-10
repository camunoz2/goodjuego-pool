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

  const games:string[] = req.body
  const proyectName = 'gjpool'

  
  const concat = games.map(el =>  proyectName + ':' + el )

  let allGames = await redis.mget(...concat)

  res.status(200).json(allGames)
}
