import React, { Fragment, useContext, useEffect } from "react";
import pokemonContext from "../../context/Pokemon/PokemonContext";

const PokemonGrid = () => {
	const PokemonContext = useContext(pokemonContext);

	useEffect(() => {
		PokemonContext.getPokemon();
	}, []);

	return (
		<Fragment>
			<div>
				{PokemonContext.pokemon.length
					? PokemonContext.pokemon.map((pokemon, i) => (
							<p key={i}>{pokemon.name}</p>
					  ))
					: null}
			</div>
		</Fragment>
	);
};

export default PokemonGrid;
