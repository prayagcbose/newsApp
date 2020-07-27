import React from "react";
import "./TextOnImg.css";

function TextOnImg({ img, text, subText, small = false }) {
	return (
		<div className="toi-main">
			<div className="toi-img">
				<img src={img} alt="image" />
			</div>
			<p className="toi-text" style={small ? { fontSize: "1rem" } : null}>
				{text}
			</p>
			<p className="toi-text-sub" style={small ? { fontSize: ".65rem" } : null}>
				{subText}
			</p>
			{/* <p className="toi-subtext">{subText}</p> */}
		</div>
	);
}

export default TextOnImg;
