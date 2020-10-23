import React, { useEffect, useState } from "react";
import axios from "axios";

const useSearchPokemon = (query, offset) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [pokemon, setPokemon] = useState([]);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setPokemon([]);
	}, [query]);

	return <div></div>;
};

export default useSearchPokemon;
