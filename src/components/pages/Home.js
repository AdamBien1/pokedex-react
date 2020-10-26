import React, { Fragment } from "react";
import Search from "../layout/Search";
import PokemonGrid from "../pokemon/PokemonGrid";
import Spinner from "../layout/Spinner";

const Home = () => {
	return (
		<Fragment>
			<Search />
			<Spinner />
			<PokemonGrid />
		</Fragment>
	);
};

export default Home;
