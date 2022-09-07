import React from "react"
import styles from "./Pokemon.module.css"
import { useParams } from "react-router-dom"
import { Loader } from "../../components/Loader/Loader"
import { DetailedPokemonCard } from "../../components/DetailedPokemonCard/DetailedPokemonCard"

interface Pokemon {
  name: string
  id: number
  height: number
  weight: number
}

const emptyPokemon: Pokemon = {
  name: "",
  id: 0,
  height: 0,
  weight: 0,
}

const fetchPokemon = async (id: string | undefined) => {
  const apiResponse = await fetch("http://localhost:8000/pokemon/" + id, { headers: { accept: "application/json" } })
  const pokemon = await apiResponse.json()
  return pokemon
}

export const Pokemon = () => {
  const [pokemon, updatePokemon] = React.useState<Pokemon>(emptyPokemon)
  const [isLoading, setIsLoading] = React.useState(true)
  const [apiCallFailed, setApiCallFailed] = React.useState(false)
  const { id } = useParams()

  React.useEffect(() => {
    fetchPokemon(id)
      .then(pokemon => {
        updatePokemon(pokemon)
        console.log(pokemon)
        setIsLoading(false)
      })
      .catch(() => setApiCallFailed(true))
  }, [])

  return (
    <div className={styles.Pokemon}>
      {apiCallFailed ? (
        <p>Something went wrong while retrieveing the pokemon from the remote API</p>
      ) : isLoading ? (
        <Loader />
      ) : (
        <DetailedPokemonCard
          id={pokemon.id}
          name={pokemon.name}
          weight={pokemon.weight}
          height={pokemon.height}
          key={pokemon.id}
        />
      )}
    </div>
  )
}
