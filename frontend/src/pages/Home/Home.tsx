import React from "react"
import { Pokemon } from "../../components/Pokemon/Pokemon"
import styles from "./Home.module.css"

interface Pokemon {
  name: string
  id: number
  height: number
  weight: number
}

function fetchPokemmons() {
  return fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } }).then(response =>
    response.json(),
  )
}

const fetchPokemons = async () => {
  const apiResponse = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
  const pokemonList = await apiResponse.json()
  return pokemonList
}

function filterPokemonsByName(pokemons: Pokemon[], name: string) {
  return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name))
}

export const Home = () => {
  const [filterValue, setFilterValue] = React.useState("")

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
  }

  const [pokemonList, updatePokemonList] = React.useState<Pokemon[]>([])

  React.useEffect(() => {
    fetchPokemons().then(pokemons => updatePokemonList(pokemons))
  }, [])

  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <input className={styles.input} onChange={onInputChange} value={filterValue} />
      {filterPokemonsByName(pokemonList, filterValue).map(pokemon => {
        return <Pokemon name={pokemon.name} id={pokemon.id} key={pokemon.id} />
      })}
    </div>
  )
}
