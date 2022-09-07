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

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const fetchPokemons = async () => {
  await sleep(1500)
  const apiResponse = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
  const pokemonList = await apiResponse.json()
  return pokemonList
}

export const Home = () => {
  const [pokemonList, updatePokemonList] = React.useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [apiCallFailed, setApiCallFailed] = React.useState(false)

  React.useEffect(() => {
    fetchPokemons()
      .then(pokemons => {
        updatePokemonList(pokemons)
        setIsLoading(false)
      })
      .catch(() => setApiCallFailed(true))
  }, [])

  return (
    <div className={styles.intro}>
      <h1>Pokedex</h1>
      <div className={styles.pokemonCards}>
        {apiCallFailed ? (
          <p>Something went wrong while retrieveing the pokemons from the remote API</p>
        ) : isLoading ? (
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
