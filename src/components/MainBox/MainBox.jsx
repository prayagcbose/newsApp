import React from "react";
import "./MainBox.css";
import { useState } from "react";
import { useEffect } from "react";

function MainBox({
	inputArray = [],
	title,
	fullHeight = false,
	titleColor = "#fff",
	updateBox = false,
}) {
	return (
		<div className={updateBox ? "main-box-updates" : "main-box"}>
			{title ? (
				<div className="title" style={{ backgroundColor: `${titleColor}` }}>
					{title}
				</div>
			) : null}
			<div
				className="item-box"
				style={fullHeight ? { maxHeight: "fit-content" } : null}
			>
				{inputArray.map((item, index) => {
					return <div key={index}>{item}</div>;
				})}
			</div>
		</div>
	);
}

export default MainBox;
