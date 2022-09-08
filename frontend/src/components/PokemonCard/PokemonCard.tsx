import { Link } from "react-router-dom"
import { Animate } from "../Animate/Animate"
import styles from "./PokemonCard.module.css"

interface Props {
  id: number
  name: string
  weight: number
  height: number
}

const PokemonComponent = ({ name, id, weight, height }: Props) => {
  return (
    <Link to={"/pokemon/" + id} className={styles.pokemonCard}>
      <p>{name}</p>
      <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"} />
      <p>Id: {id}</p>
      <p>Weight: {weight} kg</p>
      <p>Height: {height} cm</p>
    </Link>
  )
}

export const PokemonCard = Animate<Props>("tada")(PokemonComponent)
