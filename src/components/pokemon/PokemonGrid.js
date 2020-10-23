import React, { Fragment, useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import pokemonContext from "../../context/Pokemon/PokemonContext";
import PokemonGridItem from "./PokemonGridItem";
import Spinner from "../layout/Spinner";

const PokemonGrid = () => {
	const PokemonContext = useContext(pokemonContext);
	const { pokemon, loading } = PokemonContext;

	let [limit, setLimit] = useState(20);

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop !==
			document.documentElement.offsetHeight
		)
			return;
		if (loading) return;

		setTimeout(() => {
			setLimit((limit += 20));
			console.log(limit);
		}, 50);
	};

	useEffect(() => {
		PokemonContext.getPokemon();
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Fragment>
			<div className="flex justify-center items-center flex-col">
				{loading && <Spinner />}
				{pokemon.length
					? pokemon.slice(0, limit).map((pokemon) => {
							return <PokemonGridItem key={pokemon.id} pokemon={pokemon} />;
					  })
					: null}
			</div>
		</Fragment>
	);
};

export default PokemonGrid;
