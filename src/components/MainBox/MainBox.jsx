import React from "react";
import "./MainBox.css";
import { useState } from "react";
import { useEffect } from "react";

function MainBox({ inputArray, title }) {
	const [inputArr, setInputArr] = useState([]);

	useEffect(() => {
		setInputArr(inputArray);
	}, []);

	return (
		<div className="main-box">
			{title ? <div className="title">{title}</div> : null}
			<div className="item-box">
				{inputArr.map((item, index) => {
					return <div key={index}>{item}</div>;
				})}
			</div>
		</div>
	);
}

export default MainBox;
