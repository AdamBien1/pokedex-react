import React from "react";
import "./App.css";
import PokemonState from "./context/Pokemon/PokemonState";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import PokemonGrid from "./components/pokemon/PokemonGrid";
import Spinner from "./components/layout/Spinner";

function App() {
	return (
		<PokemonState>
			<div className="bg-gray-100">
				<Navbar />
				<div className="md:container mx-auto sm:max-w-md md:max-w-lg py-6 px-4">
					<Search />
					<Spinner />
					<PokemonGrid />
				</div>
			</div>
		</PokemonState>
	);
}

export default App;
