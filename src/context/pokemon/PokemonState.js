import React, { useReducer } from "react"
import axios from "axios"
import * as _ from "lodash";
import PokemonContext from "./pokemonContext"
import PokemonReducer from "./pokemonReducer"
import {
    GET_POKEMON_NAMES,
    GET_POKEMONS,
    SEARCH_POKEMON_QUERY,
    CLEAR_POKEMON_QUERY,
    GET_POKEMON,
    ENABLE_LOADING,
    DISABLE_LOADING,
    SORT_COLLECTION,
} from "../types"

const PokemonState = props => {
    const initialState = {
        totalCount: null,
        pagination: {},

        names: [],
        pokemons: [],
        selectedPokemon: {},

        queryText: "",
        queryPokemons: [],

        loading: false,
    }

    const [state, dispatch] = useReducer(PokemonReducer, initialState);

    const searchPokemonQuery = async (text) => {
        try {
            let filteredList
            setLoading();
            clearPokemonQuery();

            if(isNaN(text)) {
                filteredList = state.names.filter(pokemon => {
                    return pokemon.name.includes(text)
                })
            }
            else {
                filteredList = Array(state.names[text - 1])
            }

            if(filteredList.length > 0) {
                filteredList.forEach(result => {
                    getPokemon(result.url, true);
                })
            }

            setTimeout(() => {
                setLoading(false);
            }, 1000)
        } catch(err) {
            console.log(err)
        }
    }

    const clearPokemonQuery = () => {
        dispatch({type: CLEAR_POKEMON_QUERY})
    }

    const getPokemonNames = async () => {
        let endpoint = "https://pokeapi.co/api/v2/pokemon?limit=-1"
        setLoading();

        const response = await axios.get(endpoint);
        setTimeout(() => {
            dispatch({type: GET_POKEMON_NAMES, payload: response.data})
        }, 1000)
    }

    const getPokemons = async (url) => {
        let endpoint = url ? url : "https://pokeapi.co/api/v2/pokemon?limit=20&offest=20"
        setLoading();

        const response = await axios.get(endpoint);

        response.data?.results.forEach(result => getPokemon(result.url))

        setTimeout(() => {
            dispatch({type: GET_POKEMONS, payload: response.data})
        }, 1000)
    }

    const getPokemon = async (url, searchPokemon = false) => {
        setLoading();
        const response = await axios.get(url);
        
        switch (searchPokemon) {
            case true:
                dispatch({type: SEARCH_POKEMON_QUERY, payload: response.data});
                sortCollection("queryPokemons");
            break;
            default:
                dispatch({type: GET_POKEMON, payload: response.data})
                sortCollection("pokemons");
            break;
        }
    }

    const sortCollection = (collection) => {
        dispatch({type: SORT_COLLECTION, payload: collection})
    }

    const setLoading = (loading = true) => {
        switch (loading) {
            case false:
                dispatch({type: DISABLE_LOADING})
                break;
            default:
                dispatch({type: ENABLE_LOADING})
                break;
        }
    }


    return <PokemonContext.Provider
              value={{
                pagination: state.pagination,
                pokemons: state.pokemons,
                queryPokemons: state.queryPokemons,
                selectedPokemon: state.selectedPokemon,
                loading: state.loading,

                getPokemonNames: getPokemonNames,
                getPokemons: getPokemons,
                searchPokemonQuery: searchPokemonQuery,
                clearPokemonQuery: clearPokemonQuery,
              }}  
            >
                {props.children}
            </PokemonContext.Provider>
}

export default PokemonState;