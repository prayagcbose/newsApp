import React from "react";
import "./TextOnImg.css";

function TextOnImg({ img, text, subText }) {
	return (
		<div className="toi-main">
			<div className="toi-img">
				<img src={img} alt="image" />
			</div>
			<p className="toi-text">
				{text}
				<span className="toi-text">{subText}</span>
			</p>
			{/* <p className="toi-subtext">{subText}</p> */}
		</div>
	);
}

export default TextOnImg;
