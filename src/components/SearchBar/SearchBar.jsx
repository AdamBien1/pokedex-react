import React, { useContext, useRef } from 'react'
import useSessionStorage from "../../hooks/useSessionStorage"
import { CaretUnderscore } from '../../helpers/UtilClasses.style'
import { MagnifyingGlassIcon, SearchBarButton, SearchBarContainer, SearchBarForm } from './SearchBar.style'
import PokemonContext from '../../context/pokemon/pokemonContext'
import useTriggerAlert from '../../hooks/useTriggerAlert'
import ScrollingInputField from './ScrollingInputField'

const SearchBar = () => {
    const pokemonContext = useContext(PokemonContext)
    const { searchPokemonQuery, 
        clearPokemonQuery,  
        queryPokemons, 

        getPokemons,
        clearPokemons, 
        pokemons,

        pokemonNames,
        loading, 
    } = pokemonContext;

    const [query, setQuery] = useSessionStorage("pokemonQuery", "")
    const inputRef = useRef();

    // TriggerAlert vars
        let alertTrigger = pokemonNames.length && !loading && !queryPokemons.length && !pokemons.length && query.length;
        const alertPayload = {
            type: "warning",
            autoclear: false,
            header: "Asset Not Found!",
            message: "Please make sure your input information is valid"
        };
        const alertDependencyArr = [queryPokemons];

    useTriggerAlert(
        alertTrigger,
        alertPayload,
        alertDependencyArr
        )

    const handleSearchPokemons = (e) => {
        e.preventDefault();
        
        if(query) {
            clearPokemons();
            searchPokemonQuery(query);
        } else {
            clearPokemonQuery();
            if(!pokemons.length) {
                getPokemons();
            }
        }

        inputRef.current.blur();
        window.scrollTo(0, 0)
    }

    const handleReset = () => {
        const resetBehaviour = () => {
            setQuery("");
            clearPokemonQuery();
            getPokemons();
        }
        
        let hasQueryPokemons = queryPokemons.length && !pokemons.length;
        let queryNotFound = query.length && !pokemons.length
        if(hasQueryPokemons || queryNotFound) resetBehaviour();

        window.scrollTo(0, 0);
    }

    return (
        <SearchBarContainer>
            <SearchBarForm onSubmit={handleSearchPokemons}>
                    <CaretUnderscore />
                    <ScrollingInputField 
                        query={query} 
                        setQuery={setQuery} 
                        handleReset={handleReset} 
                        inputRef={inputRef}
                    />
                    <SearchBarButton onClick={handleSearchPokemons}>
                        <MagnifyingGlassIcon />
                    </SearchBarButton>
            </SearchBarForm>
        </SearchBarContainer>
    )
}

export default SearchBar
