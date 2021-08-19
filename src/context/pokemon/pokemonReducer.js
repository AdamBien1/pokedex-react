import { 
  CLEAR_POKEMON_QUERY, 
  GET_POKEMON, 
  GET_POKEMONS, 
  GET_POKEMON_NAMES, 
  SEARCH_POKEMON_QUERY, 
  ENABLE_LOADING, 
  DISABLE_LOADING, 
  SORT_COLLECTION,
 } from "../types";

const githubReducer = (state, action) => {
    switch (action.type) {
      case SEARCH_POKEMON_QUERY:
        return {
          ...state,
          queryPokemons: [
            ...state.queryPokemons,
            {
              id: action.payload?.id,
              order: action.payload?.order, 
              name: action.payload?.name, 
              types: action.payload?.types, 
              img: action.payload?.sprites?.front_default,
            }
          ],
        };
      case GET_POKEMON_NAMES:
        return {
          ...state,
          names: action.payload.results, 
          totalCount: action.payload.count,
          loading: false,
        }
      case GET_POKEMONS:
        return {
          ...state,
          pagination: {
            next: action.payload?.next,
            previous: action.payload?.previous
        } ,
          loading: false
        };
      case GET_POKEMON:
        return {
          ...state,
          pokemons: [
              ...state.pokemons,
              {
                id: action.payload?.id,
                order: action.payload?.order, 
                name: action.payload?.name, 
                types: action.payload?.types, 
                img: action.payload?.sprites?.front_default,
              },
          ],
        };
      case CLEAR_POKEMON_QUERY: {
        return {
          ...state,
          queryPokemons: [],
          loading: false
        };
      }
      case SORT_COLLECTION:
        switch (action.payload) {
          case "pokemons":
            return {
              ...state,
              pokemons: state.pokemons.slice().sort((a, b) => {
                return a.id - b.id;
              })
            }   
          case "queryPokemons":
            return {
              ...state,
              queryPokemons: state.queryPokemons.slice().sort((a, b) => {
                return a.id - b.id;
              })
            }   
          default:
            return { ...state }
        }
      case ENABLE_LOADING:
        return {
          ...state,
          loading: true
        };
      case DISABLE_LOADING:
        return {
          ...state,
          loading: false
        };
      default:
        return state;
    }
  }; 

export default githubReducer;