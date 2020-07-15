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
			<div className="title">Headings</div>
			<div className="item-box">
				{inputArray.map((item, index) => {
					return (
						<div key={index} className="item">
							{item}
							<hr></hr>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default MainBox;