import React from "react";
import { Link } from "react-router-dom";
import TypeBadge from "./TypeBadge";

const PokemonGridItem = ({ pokemon }) => {
	let colour = pokemon.types[0].type.colour;

	return (
		<Link
			to={`/pokemon/${pokemon.name}`}
			className="max-w-sm w-full rounded-lg border-2 border-solid border-gray-300 overflow-hidden shadow-2xl my-6 relative
		flex flex-col justify-center items-center cursor-pointer"
		>
			<h4
				className="font-bold text-3xl w-full pt-4 pb-2 capitalize text-center text-gray-100"
				style={{
					background: `${colour}`,
					fontFamily: `"Press Start 2P",
		cursive`,

					borderBottom: `4px solid rgba(0, 0, 0, .1)`,
					borderTop: `3px solid rgba(255, 255, 255, .1)`,
				}}
			>
				<span className="text-gray-200 text-xl">#{pokemon.id}</span>
				<br /> {pokemon.name}
			</h4>

			<img src={pokemon.sprites} alt="" className="w-full" />

			<div className="text-center w-full pb-6  bg-transparent">
				<div className="flex justify-center items-center">
					{pokemon.types.map((type, i) => (
						<TypeBadge
							colour={type.type.colour}
							icon={type.type.icon}
							type={type.type.name}
							key={i}
						/>
					))}
				</div>
			</div>
		</Link>
	);
};

export default PokemonGridItem;
