import React from "react";
import "./ColorBox.css";

function ColorBox(props) {
	// props: img color text
	return (
		<div className="cb-main">
			<div>
				<p className="cb-title">{props.title}</p>
				<div className="cb-line" style={{ backgroundColor: props.color }}></div>
			</div>
			<div className="cb-body" style={{ backgroundColor: props.color }}>
				<div className="cb-img-div">
					<img src={props.img}></img>
				</div>
				<div className="cb-text">{props.text}</div>
			</div>
		</div>
	);
}

export default ColorBox;
