import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="flex items-center justify-between flex-wrap bg-red-600 p-6 shadow-xl">
			{/* BRAND */}
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<span className="font-semibold text-5xl tracking-tight">PokeDex</span>
			</div>

			{/* DROPDOWN BTN */}
			<div className="block lg:hidden">
				<button
					className="flex items-center px-3 py-2 border rounded text-gray-100 border-gray-300 
                transition duration-200 ease-in-out
                hover:text-white hover:border-white"
					onClick={() => setOpen(!open)}
				>
					<FontAwesomeIcon icon={faBars} size="lg" />
				</button>
			</div>

			{open && (
				<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
					<div className="text-sm lg:flex-grow">
						<a
							href="#responsive-header"
							className="block mt-2 lg:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4"
						>
							<span className="mr-1">About</span>
							<FontAwesomeIcon icon={faQuestion} size="sm" />
						</a>
						<a
							href="#responsive-header"
							className="block mt-2 lg:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4"
						>
							<span className="mr-1">Github</span>
							<FontAwesomeIcon icon={faGithub} size="sm" />
						</a>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
