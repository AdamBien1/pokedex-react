import React, { Fragment, useContext } from "react";
import pokemonContext from "../../context/Pokemon/PokemonContext";

const Spinner = () => {
	const PokemonContext = useContext(pokemonContext);
	let { loading } = PokemonContext;

	return (
		<Fragment>
			{loading && (
				<img
					className="w-screen mx-auto object-center"
					src="/img/spinner.gif"
					alt="Loading..."
				/>
			)}
		</Fragment>
	);
};

export default Spinner;
