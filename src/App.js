import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PokemonState from "./context/Pokemon/PokemonState";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Pokemon from "./components/pages/Pokemon";

function App() {
	return (
		<PokemonState>
			<Router>
				<div className="bg-gray-100">
					<Navbar />
					<div className="md:container mx-auto sm:max-w-md md:max-w-lg py-6 px-4">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/about" component={About} />
							<Route exact path="/pokemon/:name" component={Pokemon} />
						</Switch>
					</div>
				</div>
			</Router>
		</PokemonState>
	);
}

export default App;
