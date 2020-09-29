import React from "react";
import { data } from "../../Utilities/ApiJson/ApiJson";

function ImageGetter({ image }) {
	return <img src={data.images.img1} alt="" />;
}

export default ImageGetter;
