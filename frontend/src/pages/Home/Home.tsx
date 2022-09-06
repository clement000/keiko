import React from "react"
import { Pokemon } from "../../components/Pokemon/Pokemon"
import styles from "./Home.module.css"
import { Loader } from "../../components/Loader/Loader"

interface Pokemon {
  name: string
  id: number
  height: number
  weight: number
}

const fetchPokemons = async () => {
  const apiResponse = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
  const pokemonList = await apiResponse.json()
  return pokemonList
}

export const Home = () => {
  const [pokemonList, updatePokemonList] = React.useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetchPokemons().then(pokemons => {
      updatePokemonList(pokemons)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className={styles.intro}>
      <h1>Pokedex</h1>
      <div className={styles.pokemonCards}>
        {isLoading ? (
          <Loader />
        ) : (
          pokemonList.map(pokemon => {
            return (
              <Pokemon
                name={pokemon.name}
                id={pokemon.id}
                key={pokemon.id}
                weight={pokemon.weight}
                height={pokemon.height}
              />
            )
          })
        )}
        {}
      </div>
    </div>
  )
}
