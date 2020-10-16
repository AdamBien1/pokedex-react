import React, { useReducer } from "react";
import axios from "axios";

import PokemonContext from "./PokemonContext";
import PokemonReducer from "./PokemonReducer";
import { GET_POKEMON } from "../types";

const NewsState = (props) => {
	let initialState = {
		pokemon: [],
		activePokemon: null,
	};

	const [state, dispatch] = useReducer(PokemonReducer, initialState);

	const getPokemon = async () => {
		axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
			let { results } = response.data;

			results.forEach((result) => {
				axios.get(result.url).then((response) => {
					let { data } = response;
					dispatch({ type: GET_POKEMON, payload: data });
				});
			});
		});
	};

	// const getDescription = async (id) => {
	// 	try {
	// 		let res = await axios.get(`https://node-hnapi.herokuapp.com/item/${id}`);
	// 		let { data } = res;

	// 		dispatch({ type: GET_DESCRIPTION, payload: data });
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	return (
		<PokemonContext.Provider
			value={{
				pokemon: state.pokemon,
				activePokemon: state.activePokemon,
				getPokemon,
			}}
		>
			{props.children}
		</PokemonContext.Provider>
	);
};

export default NewsState;
