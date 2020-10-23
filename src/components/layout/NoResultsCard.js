import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const NoResultsCard = () => {
	return (
		<div
			className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
			role="alert"
		>
			<strong className="font-bold text-lg mb-2">Holy smokes</strong>
			<img src="img/pikachu-sleeping.png" alt="" className="w-full mb-4" />
			<span className="block sm:inline text-center text-md">
				Sorry! I can't find what you're looking for!
			</span>

			<span className="absolute top-0 bottom-0 right-0 px-4 py-3">
				<FontAwesomeIcon icon={faExclamationCircle} size="lg" />
			</span>
		</div>
	);
};

export default NoResultsCard;
