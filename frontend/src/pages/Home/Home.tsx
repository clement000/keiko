import styles from "./Home.module.css"

interface Pokemon {
  name: string
  code: number
}

const pokemon: Pokemon = {
  name: "Carapuce",
  code: 7,
}

export const Home = () => {
  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        alt="Pokemon image"
      ></img>
      <p>Name : {pokemon.name}</p>
      <p>Code : {pokemon.code}</p>
    </div>
  )
}
