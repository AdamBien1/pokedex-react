import { useEffect, useContext } from "react";
import pokemonContext from "../PokemonContext";

const useSearchPokemon = (query) => {
	let filteredPokemon;
	const PokemonContext = useContext(pokemonContext);
	const { loading, pokemon, filterPokemon, setActiveQuery } = PokemonContext;

	useEffect(() => {
		if (loading) return;
		// Check if query is a number
		if (query === "") {
			filterPokemon([]);
			setActiveQuery("");
		} else {
			if (!isNaN(query)) {
				setActiveQuery(query);
				filteredPokemon = pokemon.filter((item) =>
					item.id.toString().includes(query)
				);
				filterPokemon(filteredPokemon);
			} else {
				setActiveQuery(query);
				filteredPokemon = pokemon.filter((item) => item.name.includes(query));
				filterPokemon(filteredPokemon);
			}
		}
	}, [query]);

	return { filteredPokemon };
};

export default useSearchPokemon;
