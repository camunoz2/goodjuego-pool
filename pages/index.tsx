import { useEffect, useState } from 'react'
import GameItem from '../components/GameItem'

export default function Index() {
  const games = ['Destiny 2', 'Monster Hunter World']
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
      <h1 className="text-4xl bg-green-200">Juegos</h1>
      <ul className="flex flex-col gap-2 items-start justify-center">
        {games.map((game, i) => {
          return (
            <div
              key={i}
              className="flex gap-1 justify-center items-center rounded bg-slate-50"
            >
              <GameItem>{game}</GameItem>
              <button
                className="border border-green-600 rounded shadow py-2 px-1"
                onClick={() => vote(game)}
              >
                VOTAR!
              </button>
              <div>{votesByGame[i]}</div>
            </div>
          )
        })}
      </ul>
    </>
  )
}
