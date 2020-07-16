import React from "react";

import { Container, Col, Row } from "react-bootstrap";
import MainBox from "../MainBox/MainBox";
import Navigation from "../Navigation/Navigation";
import ControlledCarousel from "./../ControllerCarousel/ControlledCarousel";
import Header from "./../Header/Header";

const text =
	"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam excepturi a, architecto, est illum molestiae, tempore delectus quo eum soluta quod! Consequatur voluptatibus dolorem nesciunt veniam quis, iste quo deleniti.";

function Index() {
	return (
		<div>
			<Header></Header>
			<Navigation></Navigation>
		</div>
	);
}

export default Index;
