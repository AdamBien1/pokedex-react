import React from "react";

const Search = () => {
	return (
		<form className="w-full max-w-sm mx-auto">
			<div className="flex items-center border-b border-red-600 py-2">
				<input
					className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
					type="text"
					placeholder="Jane Doe"
					aria-label="Full name"
				/>
				<button
					className="flex-shrink-0 bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
					type="button"
				>
					Sign Up
				</button>
			</div>
		</form>
	);
};

export default Search;
