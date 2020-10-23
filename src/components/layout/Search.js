import React, { useState } from "react";
import useSearchPokemon from "../../context/Pokemon/hooks/useSearchPokemon";

const Search = () => {
	const [query, setQuery] = useState("");

	useSearchPokemon(query);

	const handleSearch = (e) => {
		setQuery(e.target.value);
	};

	return (
		<form className="w-full max-w-sm mx-auto">
			<div className="flex items-center border-b border-red-600 py-2">
				<input
					className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
					type="text"
					placeholder="Search by name or id..."
					value={query}
					onChange={handleSearch}
				/>
			</div>
		</form>
	);
};

export default Search;
