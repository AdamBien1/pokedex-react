import { GET_HAS_NEXT, GET_POKEMON, SET_LOADING } from "../types";

export default (state, action) => {
	const { payload, type } = action;

	switch (type) {
		case GET_POKEMON:
			return {
				...state,
				loading: false,
				pokemon: [...state.pokemon, ...payload],
			};
		case SET_LOADING:
			return {
				...state,
				loading: !state.loading,
			};
		default:
			return state;
	}
};
