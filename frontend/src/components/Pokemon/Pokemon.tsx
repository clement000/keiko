import styles from "./Pokemon.module.css"

interface Props {
  id: number
  name: string
  weight: number
  height: number
}

export const Pokemon = ({ name, id, weight, height }: Props) => {
  return (
    <div className={styles.intro}>
      <p>{name}</p>
      <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"} />
      <p>Id: {id}</p>
      <p>Weight: {weight} kg</p>
      <p>Height: {height} cm</p>
    </div>
  )
}
