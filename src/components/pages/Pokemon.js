import React from "react";
import Spinner from "../layout/Spinner";
import { useEffect, useContext } from "react";
import pokemonContext from "../../context/Pokemon/PokemonContext";

const Pokemon = ({ match }) => {
	const PokemonContext = useContext(pokemonContext);
	const { loading, getActivePokemon } = PokemonContext;

	useEffect(() => {
		getActivePokemon(match.params.name);
	}, []);

	if (loading) return <Spinner />;
	return (
		<div>
			<h1>HALLO WOLRD from {match.params.name}</h1>
		</div>
	);
};

export default Pokemon;
