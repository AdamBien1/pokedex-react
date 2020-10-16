import { GET_POKEMON } from "../types";

export default (state, action) => {
	const { payload, type } = action;

	switch (type) {
		case GET_POKEMON:
			return {
				...state,
				pokemon: [...state.pokemon, payload],
			};
		// case GET_DESCRIPTION:
		// 	return {
		// 		...state,
		// 		activeNews: payload,
		// 	};
		default:
			return state;
	}
};
