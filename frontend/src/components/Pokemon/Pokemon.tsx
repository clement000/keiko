interface Props {
  id: number
  name: string
}

export const Pokemon = ({ name, id }: Props) => {
  return (
    <div>
      <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"} />
      <p>Name: {name}</p>
      <p>Number: {id}</p>
    </div>
  )
}
