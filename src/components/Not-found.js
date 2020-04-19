import React from "react";

const NotFound = () => {
	const style = {
		textAlign: "center",
		margin: "30px",
		fontSize: "30px",
	};
	return (
		<p style={style}>
			Not Found{" "}
			<span role="img" aria-label="notFound">
				🚫
			</span>
		</p>
	);
};

export default NotFound;
