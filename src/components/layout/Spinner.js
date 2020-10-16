import React, { Fragment } from "react";
import spinner from "../../img/spinner.gif";

const Spinner = ({ loading }) => {
	return (
		<Fragment>
			<img src={spinner} alt="Loading..." />
		</Fragment>
	);
};

export default Spinner;
