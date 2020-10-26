import React, { Fragment } from "react";
import Tailwind from "../icons/Tailwind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";

const About = () => {
	return (
		<Fragment>
			<h1 className="text-3xl font-semibold mb-6 border-b-2 border-red-600">
				About{" "}
			</h1>

			{/* About text */}
			<p className="text-lg leading-7">
				<span className="font-medium">Welcome to my website!</span> This app
				provides wide range of information concerning pokemon with data fetched
				from PokeAPI. Technologies used in creating the app are listed below and
				code is available on my Github page.
			</p>
			<p className="mt-2 mb-4 italic text-gray-700">
				<span className="font-medium">DISCLAIMER: </span> This is an unofficial,
				fan-made app and is NOT affiliated, endorsed or supported by Nintendo,
				Game Freak or The Pokemon Company in any way. No copyright infringement
				intended.
			</p>

			{/* Stack used card/list-group */}
			<div className="border-4 shadow-md rounded mb-8">
				<h4 className="text-gray-800 text-xl border-b-2 p-2 bg-gray-300 font-medium">
					Stack used
				</h4>
				<ul className="px-0">
					<li className="list-none  border-b-2 rounded-sm px-3 py-4 text-blue-800 text-lg hover:bg-gray-200 hover:text-blue-900">
						<FontAwesomeIcon icon={faReact} size="lg" />
						<span className="ml-2">React JS</span>
					</li>
					<li className="list-none  border-b-2 rounded-sm px-3 py-4 text-teal-500 text-lg hover:bg-gray-200 hover:text-teal-600">
						<Tailwind />
						<span className="ml-2">Tailwind CSS </span>
					</li>
					<li className="list-none  border-b-2 rounded-sm px-3 py-4 text-gray-700 text-lg hover:bg-gray-200 hover:text-gray-800">
						<FontAwesomeIcon icon={faTools} />
						<span className="ml-2">Context API</span>
					</li>
				</ul>
			</div>

			{/* External resourses */}
			<h2 className="text-xl text-gray-700 mb-2">External Resourses</h2>
			<ul>
				<li className="py-1">
					<span className="font-medium">Data</span> -{" "}
					<a
						target="_blank"
						href="https://pokeapi.co/"
						className="text-blue-800"
					>
						{" "}
						PokeAPI
					</a>
				</li>
				<li className="py-1">
					<span className="font-medium">Pokemon Types Icons</span> -{" "}
					<a
						target="_blank"
						href="https://pokemongo.fandom.com/wiki/Types"
						className="text-blue-800"
					>
						PokemonGo Wiki
					</a>
				</li>
				<li className="py-1">
					<span className="font-medium">Sleeping Pikachu Image</span> -{" "}
					<a
						target="_blank"
						href="https://www.pinpng.com/picture/xJiwih_pikachu-cute-pixel-kawaii-pokemon-yellow-mochi-pixel/"
						className="text-blue-800"
					>
						PinPNG
					</a>
				</li>
				<li className="py-1">
					<span className="font-medium">Utility Icons</span> -{" "}
					<a
						target="_blank"
						href="https://fontawesome.com/"
						className="text-blue-800"
					>
						Font Awesome
					</a>
				</li>
			</ul>
		</Fragment>
	);
};

export default About;
