import React, { Fragment, useContext, useEffect } from 'react'

import PokemonCard from '../components/PokemonCard/PokemonCard'
import GridLayout from "../templates/GridLayout/GridLayout"
import PokemonContext from '../context/pokemon/pokemonContext'
import AlertContext from '../context/alert/alertContext'
import Spinner from '../components/Spinner/Spinner';
import Alert from '../components/Alert/Alert';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const Home = () => {
    const pokemonContext = useContext(PokemonContext)
    const { names, pokemons, queryPokemons, pagination, loading, getPokemonNames, getPokemons} = pokemonContext;

    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;

    useEffect(() => {
        if(!names) getPokemonNames();
        if(!pagination.next)
        getPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const lastPokemonRef = useInfiniteScroll(
            pagination.next, 
            () => getPokemons(pagination.next), 
            loading, 
            [loading, pagination]
        )

    return (
        <Fragment>
            {loading && <Spinner loading={loading}/>}
            {alert.active && <Alert />}
            <GridLayout>
            {queryPokemons.length > 0 ? 
                queryPokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                )) :
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
