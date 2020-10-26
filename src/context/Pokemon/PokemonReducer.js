import {
	GET_POKEMON,
	GET_ACTIVE_POKEMON,
	FILTER_POKEMON,
	SET_LOADING,
	SET_ACTIVE_QUERY,
} from "../types";

export default (state, action) => {
	const { payload, type } = action;

	switch (type) {
		case GET_POKEMON:
			return {
				...state,
				loading: false,
				pokemon: [...state.pokemon, ...payload],
			};
		case GET_ACTIVE_POKEMON:
			return {
				...state,
				loading: false,
				activePokemon: payload,
			};
		case FILTER_POKEMON:
			return {
				...state,
				loading: false,
				filteredPokemon: [...payload],
			};
		case SET_LOADING:
			return {
				...state,
				loading: !state.loading,
			};
		case SET_ACTIVE_QUERY:
			return {
				...state,
				activeQuery: payload,
			};
		default:
			return state;
	}
};
