// questions :
// comment gérer les string | undefined correctement ?
// comment marche le routing ? quand on change le path ça ne recharge pas la page, donc j'utilise un hook, mais du coup ce n'est pas la même logique que la première fois, et donc je n'ai pas de loader.

import React from "react"
import { Pokemon } from "../../components/PokemonCard/PokemonCard"
import styles from "./Home.module.css"
import { Loader } from "../../components/Loader/Loader"
import { Link, useParams } from "react-router-dom"

interface Pokemon {
  name: string
  id: number
  height: number
  weight: number
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const fetchPokemons = async (page: string | undefined) => {
  await sleep(500)
  const apiResponse = await fetch("http://localhost:8000/pokemons?page=" + page, {
    headers: { accept: "application/json" },
  })
  const pokemonList = await apiResponse.json()
  return pokemonList
}

export const Home = () => {
  const [pokemonList, updatePokemonList] = React.useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [apiCallFailed, setApiCallFailed] = React.useState(false)
  const { page } = useParams()

  console.log(isLoading)

  React.useEffect(() => {
    setIsLoading(true)
    fetchPokemons(page)
      .then(pokemons => {
        updatePokemonList(pokemons)
        setIsLoading(false)
      })
      .catch(() => setApiCallFailed(true))
  }, [page])

  return (
    <div className={styles.intro}>
      <h1>Pokedex</h1>
      <div className={styles.pageArrows}>
        <Link to={"/pokedex/" + Math.max(parseInt(page!) - 1, 1).toString()}>{"<"}</Link>
        <Link to={"/pokedex/" + Math.min(parseInt(page!) + 1, 10).toString()}>{">"}</Link>
      </div>
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
