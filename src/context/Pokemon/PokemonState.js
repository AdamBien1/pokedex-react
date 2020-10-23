import React, { useReducer } from "react";
import axios from "axios";
import PokemonContext from "./PokemonContext";
import PokemonReducer from "./PokemonReducer";
import {
	GET_POKEMON,
	SET_LOADING,
	FILTER_POKEMON,
	SET_ACTIVE_QUERY,
} from "../types";

const PokemonState = (props) => {
	let initialState = {
		pokemon: [],
		filteredPokemon: [],
		activeQuery: "",
		loading: false,
		activePokemon: null,
	};

	const typesColourArr = {
		bug: "#A8B820",
		dark: "#705848",
		dragon: "#7038F8",
		electric: "#F8D030",
		fairy: "#EE99AC",
		fighting: "#C03028",
		fire: "#F08030",
		flying: "#A890F0",
		ghost: "#705898",
		grass: "#78C850",
		ground: "#E0C068",
		ice: "#98D8D8",
		normal: "#A8A878",
		poison: "#A040A0",
		psychic: "#F85888",
		rock: "#B8A038",
		steel: "#B8B8D0",
		water: "#6890F0",
	};

	const typesIconArr = {
		bug: "img/Icon_Bug.png",
		dark: "img/Icon_Dark.png",
		dragon: "img/Icon_Dragon.png",
		electric: "img/Icon_Electric.png",
		fairy: "img/Icon_Fairy.png",
		fighting: "img/Icon_Fighting.png",
		fire: "img/Icon_Fire.png",
		flying: "img/Icon_Flying.png",
		ghost: "img/Icon_Ghost.png",
		grass: "img/Icon_Grass.png",
		ground: "img/Icon_Ground.png",
		ice: "img/Icon_Ice.png",
		normal: "img/Icon_Normal.png",
		poison: "img/Icon_Poison.png",
		psychic: "img/Icon_Psychic.png",
		rock: "img/Icon_Rock.png",
		steel: "img/Icon_Steel.png",
		water: "img/Icon_Water.png",
	};

	const [state, dispatch] = useReducer(PokemonReducer, initialState);

	let pokemonData = [];
	const getPokemon = (url = "https://pokeapi.co/api/v2/pokemon") => {
		dispatch({ type: SET_LOADING });
		// Check if already in storage
		if (localStorage.getItem("pokemon") !== null) {
			pokemonData = JSON.parse(localStorage.getItem("pokemon"));
			dispatch({
				type: GET_POKEMON,
				payload: pokemonData.sort((p1, p2) => {
					return p1.id - p2.id;
				}),
			});
			// If not, make recursive requests
		} else {
			axios.get(url).then((response) => {
				let { results, next } = response.data;

				results.forEach((result) => {
					axios.get(result.url).then((response) => {
						const keys = ["id", "name", "sprites", "types", "front_default"];

						let { data } = response;
						data = Object.keys(data)
							.filter((key) => keys.includes(key))
							.reduce((obj, key) => {
								obj[key] = data[key];
								return obj;
							}, {});
						data.sprites = data.sprites.front_default;
						data = data.filter((item) => item.sprites.includes(!"null"));

						getColours(data);
						getIcons(data);
						pokemonData.push(data);
					});
				});

				if (next !== null) {
					getPokemon(next);
					// When all requests are done, save to local storage and dispatch to state
				} else {
					localStorage.setItem("pokemon", JSON.stringify(pokemonData));

					dispatch({
						type: GET_POKEMON,
						payload: pokemonData.sort((p1, p2) => {
							return p1.id - p2.id;
						}),
					});
				}
			});
		}
	};

	const getColours = (pokemon) => {
		let pokemonTypes = { ...pokemon.types };
		pokemon.types.forEach((type, i) => {
			if (type.type.name in typesColourArr) {
				pokemonTypes[i].type.colour = typesColourArr[type.type.name];
			}
		});
	};

	const getIcons = (pokemon) => {
		let pokemonTypes = { ...pokemon.types };
		pokemon.types.forEach((type, i) => {
			if (type.type.name in typesIconArr) {
				pokemonTypes[i].type.icon = typesIconArr[type.type.name];
			}
		});
	};

	const setActiveQuery = (query) => {
		dispatch({ type: SET_ACTIVE_QUERY, payload: query });
	};

	const filterPokemon = (filteredPokemon) => {
		dispatch({ type: FILTER_POKEMON, payload: filteredPokemon });
	};

	return (
		<PokemonContext.Provider
			value={{
				pokemon: state.pokemon,
				filteredPokemon: state.filteredPokemon,
				activeQuery: state.activeQuery,
				loading: state.loading,
				activePokemon: state.activePokemon,
				getPokemon,
				filterPokemon,
				setActiveQuery,
			}}
		>
			{props.children}
		</PokemonContext.Provider>
	);
};

export default PokemonState;
