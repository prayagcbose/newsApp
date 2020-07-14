import React from "react";
import "../styles/Main.css";
import { useState } from "react";
import { useEffect } from "react";

function MainBox(props) {
	const [inputArray, setInputArray] = useState([]);

	useEffect(() => {
		setInputArray(props.inputArray);
	}, []);

	return (
		<div className="main-box">
			<div className="title">Headings</div>
			{inputArray.map((item, index) => {
				return (
					<div key={index} className="item">
						{item}
						<hr></hr>
					</div>
				);
			})}
		</div>
	);
}

export default MainBox;
