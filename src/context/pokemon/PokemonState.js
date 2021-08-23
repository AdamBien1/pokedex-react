import React, { useReducer } from "react"
import axios from "axios"
import * as _ from "lodash";
import PokemonContext from "./pokemonContext"
import PokemonReducer from "./pokemonReducer"
import {
    GET_POKEMON_NAMES,
    GET_POKEMONS,
    CLEAR_POKEMONS,
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
        pagination: {
            next: null,
            previous: null,
            nextArray: null,
        },

        pokemonNames: [],
        pokemons: [],
        selectedPokemon: {},

        queryText: "",
        queryPokemons: [],

        loading: false,
    }

    const [state, dispatch] = useReducer(PokemonReducer, initialState);

    const searchPokemonQuery = async (text) => {
        let filteredList
        setLoading();
        clearPokemonQuery();
        
        if(isNaN(text)) {
            filteredList = state.pokemonNames.filter(pokemon => {
                return pokemon.name.includes(text.toLowerCase());
            })
        } else {
            filteredList = Array(state.pokemonNames[text - 1])
        }

        if(filteredList.length > 0) {
            getPokemons(filteredList);
        }

        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

    const clearPokemonQuery = () => {
        dispatch({type: CLEAR_POKEMON_QUERY})
    }

    const clearPokemons = () => {
        dispatch({type: CLEAR_POKEMONS})
    }

    const getPokemonNames = async () => {
        let endpoint = "https://pokeapi.co/api/v2/pokemon?limit=-1"
        setLoading();

        const response = await axios.get(endpoint);
        setTimeout(() => {
            dispatch({type: GET_POKEMON_NAMES, payload: response.data})
        }, 1000)
    }

    const getPokemons = async (source) => {
        switch (typeof source) {
            // CASE: Fetch new batch of results from API request
            case "undefined":
            case "string":
                let endpoint = source ? source : "https://pokeapi.co/api/v2/pokemon?limit=20&offest=20"
                setLoading();
    
                const response = await axios.get(endpoint);
    
                response.data?.results.forEach(result => getPokemon(result.url))
    
                setTimeout(() => {
                    dispatch({type: GET_POKEMONS, payload: response.data})
                }, 1000)
                break;
            // CASE: fetch new batch of results from Array of names
            case "object":
                if(Array.isArray(source) && source.length > 20) {
                    try {
                        for(const result of source.slice(0, 20)) {
                            getPokemon(result.url, true);
                        }
    
                        setTimeout(() => {
                            dispatch({
                                type: GET_POKEMONS, 
                                payload: {
                                    nextArray: source.slice(20, source.length),
                                }
                            })
                        }, 1000)
                    } catch(err) {
                        clearPokemonQuery();
                    }
                } else if (Array.isArray(source) && source.length > 0) {
                    try {
                        for (const result of source) {
                            getPokemon(result.url, true)
                        }

                        setTimeout(() => {
                            dispatch({
                                type: GET_POKEMONS, 
                                payload: {
                                    nextArray: null,
                                }
                            })
                        }, 1000)
                    } catch(err) {
                        clearPokemonQuery();
                    }
                }
                break;
            default:
                break;
        }
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
                pokemonNames: state.pokemonNames,
                queryPokemons: state.queryPokemons,
                selectedPokemon: state.selectedPokemon,
                loading: state.loading,

                getPokemonNames: getPokemonNames,
                getPokemons: getPokemons,
                searchPokemonQuery: searchPokemonQuery,
                clearPokemonQuery: clearPokemonQuery,
                clearPokemons: clearPokemons,
              }}  
            >
                {props.children}
            </PokemonContext.Provider>
}

export default PokemonState;