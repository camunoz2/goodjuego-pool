import { NextApiRequest, NextApiResponse } from "next";
import {Redis} from '@upstash/redis'

const redis = new Redis({
  url: 'UPSTASH_REDIS_REST_URL',
  token: 'UPSTASH_REDIS_REST_TOKEN',
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  let count = await redis.incr("counter")
  res.status(200).json({count: count})
}
