import React from "react";

const TypeBadge = ({ type, colour, icon }) => {
	return (
		<span
			className="rounded-lg px-3 py-1 text-sm  text-white mr-2 mb-2 uppercase flex justify-evenly items-center"
			style={{
				background: `${colour}`,
				fontFamily: '"Press Start 2P", cursive',
				border: `4px solid rgba(0, 0, 0, .25)`,
				borderTop: `4px solid rgba(255, 255, 255, .25)`,
			}}
		>
			<img
				src={icon}
				alt=""
				className="w-full inline-block mr-3"
				style={{ opacity: 0.9 }}
			/>
			{type}
		</span>
	);
};

export default TypeBadge;
