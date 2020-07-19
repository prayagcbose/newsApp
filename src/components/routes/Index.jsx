import React from "react";

import { Container, Col, Row } from "react-bootstrap";
import MainBox from "../MainBox/MainBox";
import Navigation from "../Navigation/Navigation";
import ControlledCarousel from "./../ControllerCarousel/ControlledCarousel";
import Header from "./../Header/Header";
import CustomBreadCrumb from "../CustomBreadCrumb/CustomBreadCrumb";
import IndexSection1 from "../Sections/IndexSections/Section1/IndexSection1";
import Footer from "../Footer/Footer";
import KeralaSection from "../Sections/IndexSections/KeralaSection/KeralaSection";
import IndexSection3 from "./../Sections/IndexSections/Section3/IndexSection3";
import ScrollSection from "./../Sections/IndexSections/ScrollSection/ScrollSection";
import SectionContainer from "../Sections/IndexSections/SectionContainer/SectionContainer";

const text =
	"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam excepturi a, architecto, est illum molestiae, tempore delectus quo eum soluta quod! Consequatur voluptatibus dolorem nesciunt veniam quis, iste quo deleniti.";

function Index() {
	return (
		<div>
			<Header></Header>
			<Navigation></Navigation>
			<CustomBreadCrumb></CustomBreadCrumb>
			<IndexSection1></IndexSection1>
			<ScrollSection></ScrollSection>
			<KeralaSection></KeralaSection>
			<IndexSection3></IndexSection3>
			<Footer></Footer>
		</div>
	);
}

export default Index;
