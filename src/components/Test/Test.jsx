import React, { useEffect, useState } from "react";

function Test({ location }) {
	const [query, setQuery] = useState("");
	useEffect(() => {
		const address = new URLSearchParams(location.search);
		const q = address.get("q");
		setQuery(q);
	}, [location]);
	return (
		<div>
			<h1>Test: {query}</h1>
		</div>
	);
}

export default Test;
