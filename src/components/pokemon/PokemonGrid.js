import React, { Fragment, useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import pokemonContext from "../../context/Pokemon/PokemonContext";
import PokemonGridItem from "./PokemonGridItem";
import Spinner from "../layout/Spinner";
import NoResultsCard from "../layout/NoResultsCard";
import { Link } from "react-router-dom";

const PokemonGrid = () => {
	const PokemonContext = useContext(pokemonContext);
	const { pokemon, filteredPokemon, loading, activeQuery } = PokemonContext;

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

	const showFiltered = Boolean(filteredPokemon.length && activeQuery.length);
	const showAlert = Boolean(!showFiltered && activeQuery.length);
	const showDefault = Boolean(pokemon.length && !activeQuery.length);

	return (
		<Fragment>
			<div className="flex justify-center items-center flex-col">
				{loading && <Spinner />}
				{showAlert && <NoResultsCard />}
				{showFiltered &&
					filteredPokemon.map((pokemon) => {
						return <PokemonGridItem key={pokemon.id} pokemon={pokemon} />;
					})}
				{showDefault &&
					pokemon.slice(0, limit).map((pokemon) => {
						return <PokemonGridItem key={pokemon.id} pokemon={pokemon} />;
					})}
			</div>
		</Fragment>
	);
};

export default PokemonGrid;
