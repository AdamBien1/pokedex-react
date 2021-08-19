import React, { useEffect, useContext, useState, useRef } from 'react'
import useSessionStorage from "../../hooks/useSessionStorage"
import { CaretUnderscore } from '../../helpers/UtilClasses.style'
import { MagnifyingGlassIcon, SearchBarButton, SearchBarContainer, SearchBarField, SearchBarPlaceholder, SearchBarForm } from './SearchBar.style'
import PokemonContext from '../../context/pokemon/pokemonContext'
import useDimensions from '../../hooks/useDimensions'
import useWindowDimensions from '../../hooks/useWindowDimentions'
import useScrollPlaceholder from '../../hooks/useScrollPlaceholder'
import useTriggerAlert from '../../hooks/useTriggerAlert'

const SearchBar = () => {
    const pokemonContext = useContext(PokemonContext)
    const { searchPokemonQuery, clearPokemonQuery, queryPokemons, loading } = pokemonContext;
    const [placeholderOverflow, setPlaceholderOverflow] = useState(0);
    const [query, setQuery] = useSessionStorage("pokemonQuery", "")

    const [placeholderRef, placeholderDimensions] = useDimensions();
    const inputRef = useRef();
    const { width } = useWindowDimensions();

    useEffect(() => {
        if(query !== "") {
            searchPokemonQuery(query);
        }
        return () => {
            clearPokemonQuery()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // ScrollPlaceholder vars
        const overflowWidth = placeholderRef.current?.scrollWidth - placeholderDimensions.width
        const placeholderScrollDependencyArr = [
            placeholderRef,
            placeholderRef.current?.scrollWidth,
            placeholderDimensions.width, width
        ];

    useScrollPlaceholder(
        overflowWidth, 
        setPlaceholderOverflow, 
        placeholderScrollDependencyArr
        );

    // TriggerAlert vars
        const alertTrigger = queryPokemons.length <= 0 && query !== "" && !loading;
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
        if(query) {
            searchPokemonQuery(query);
        } else {
            clearPokemonQuery();
        }

        inputRef.current.blur();
        e.preventDefault();
    }

    const handleReset = () => {
        setQuery("");
        clearPokemonQuery();
    }

    return (
        <SearchBarContainer>
            <SearchBarForm onSubmit={handleSearchPokemons}>
                    <CaretUnderscore />
                    <SearchBarField
                        ref={inputRef}
                        value={query} 
                        onChange={e => setQuery(e.target.value)}
                        overflowX={`translateX(-${placeholderOverflow}px)`}
                        onFocus={handleReset}
                        />
                    <SearchBarPlaceholder 
                        ref={placeholderRef}
                        style={
                            {opacity: `${query !== "" ? 0 : 1}`}
                            }
                    >
                        Enter Pokemon name or ID...
                    </SearchBarPlaceholder>
                    <SearchBarButton>
                        <MagnifyingGlassIcon />
                    </SearchBarButton>
            </SearchBarForm>
        </SearchBarContainer>
    )
}

export default SearchBar
