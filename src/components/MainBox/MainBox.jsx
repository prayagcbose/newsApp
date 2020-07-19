import React from "react";
import "./MainBox.css";
import { useState } from "react";
import { useEffect } from "react";

function MainBox(props) {
	const [inputArray, setInputArray] = useState([]);

	useEffect(() => {
		setInputArray(props.inputArray);
	}, []);

	return (
		<div className="main-box">
			{props.title ? <div className="title">{props.title}</div> : null}
			<div className="item-box">
				{inputArray.map((item, index) => {
					return <div key={index}>{item}</div>;
				})}
			</div>
		</div>
	);
}

export default MainBox;
