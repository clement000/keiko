import styles from "./DetailedPokemonCard.module.css"

interface Props {
  id: number
  name: string
  weight: number
  height: number
}

export const DetailedPokemonCard = ({ name, id, weight, height }: Props) => {
  return (
    <div className={styles.intro}>
      <h1>{name}</h1>
      <div className={styles.image}>
        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"} />
        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + id + ".png"} />
        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + id + ".png"} />
        <img
          src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/" + id + ".png"}
        />
      </div>

      <p>Id: {id}</p>
      <p>Weight: {weight} kg</p>
      <p>Height: {height} cm</p>
    </div>
  )
}
