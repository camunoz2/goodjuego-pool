import { useEffect, useState } from 'react'
import GameItem from '../components/GameItem'
import Image from 'next/image'
import bg from '../public/mhbg.jpg'

export default function Index() {
  const games = ['Monster Hunter World', 'Mario Bros', 'Destiny 2']
  const [votesByGame, setVotesByGame] = useState([])

  useEffect(() => {
    getVotes()
  }, [])

  const vote = async (game: string) => {
    voteForGame(game)
    getVotes()
  }

  async function getVotes() {
    await fetch('/api/getvotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(games)
    })
      .then((res) => res.json())
      .then((data) => setVotesByGame(data))
  }

  async function voteForGame(game) {
    await fetch('/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(game)
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <>
      <div className="absolute t-0 l-0 -z-20 w-full h-full">
        <Image layout="fixed" src={bg} alt="" />
      </div>
      <div className="bg-[#100C2A] w-full h-full absolute -z-10 mix-blend-multiply" />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl text-white font-extrabold">GoodJuego</h1>
        <p className="text-xl text-white">
          Como nunca nos ponemos de acuerdo en que jugar. Decidimos hacer esta
          lista publica para que nos ayuden. Visiten{' '}
          <a
            className="underline cursor-pointer"
            href="https://www.twitch.tv/goodjuego"
            target="_blank"
          >
            nuestro canal de twitch
          </a>
        </p>

        <div className="my-16" />
        <ul className="flex flex-col gap-2 items-start justify-center">
          {games.map((game, i) => {
            return (
              <div
                onClick={() => vote(game)}
                key={i}
                className="cursor-pointer select-none flex gap-4 justify-center items-center rounded border border-white px-4 py-2 text-4xl md:text-5xl text-white font-display"
              >
                <p>{game}</p>
                <div>{votesByGame[i]}</div>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}
