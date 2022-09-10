interface Props {
  children?: React.ReactNode
}

export default function GameItem ({children}: Props) {
  return(
    <div className="flex gap-1 justify-center items-center">
      {children}
    </div>
  )
}