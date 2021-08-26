import React, { Fragment, useContext, useEffect } from 'react'

import PokemonCard from '../components/PokemonCard/PokemonCard'
import GridLayout from "../templates/GridLayout/GridLayout"
import PokemonContext from '../context/pokemon/pokemonContext'
import AlertContext from '../context/alert/alertContext'
import Spinner from '../components/Spinner/Spinner';
import Alert from '../components/Alert/Alert';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import useSessionStorage from '../hooks/useSessionStorage'

const Home = () => {
    const pokemonContext = useContext(PokemonContext)
    const { pokemonNames, getPokemonNames, pokemons, getPokemons, queryPokemons, searchPokemonQuery, pagination, loading} = pokemonContext;

    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;

    const [query, ] = useSessionStorage("pokemonQuery", "")

    useEffect(() => {
        if(!pokemonNames.length) {
            getPokemonNames();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(query.length) {
            searchPokemonQuery(query)
        } else if(!pagination.next) {
            getPokemons()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemonNames.length])

    const lastPokemonRef = useInfiniteScroll(
            pagination.next, 
            () => getPokemons(pagination.next), 
            loading, 
            [loading, pagination.next]
        )

    const lastFilteredPokemonRef = useInfiniteScroll(
        pagination.nextArray,
        () => getPokemons(pagination.nextArray),
        loading,
        [loading, pagination.nextArray?.length]
        )

    return (
        <Fragment>
            {loading && <Spinner loading={loading}/>}
            {alert.active && <Alert />}
            <GridLayout>
            {queryPokemons.length > 0 ? 
                queryPokemons.map((pokemon, index) => {
                    if(queryPokemons.length === index+1) {
                        return (
                            <PokemonCard forwardRef={lastFilteredPokemonRef} key={pokemon.id} pokemon={pokemon}/>
                            )
                        } else {
                            return (
                                <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                                )
                            }
                }) :
                pokemons.map((pokemon, index) => {
                    if(pokemons.length === index+1) {
                        return (
                            <PokemonCard forwardRef={lastPokemonRef} key={pokemon.id} pokemon={pokemon}/>
                            )
                        } else {
                            return (
                                <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                                )
                            }
                        })
            }
            </GridLayout>
        </Fragment>
    )
}

export default Home
