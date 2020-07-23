import React from "react";
import Navigation from "../Navigation/Navigation";
import Header from "./../Header/Header";
import CustomBreadCrumb from "../CustomBreadCrumb/CustomBreadCrumb";
import IndexSection1 from "../Sections/IndexSections/Section1/IndexSection1";
import Footer from "../Footer/Footer";
import KeralaSection from "../Sections/IndexSections/KeralaSection/KeralaSection";
import IndexSection3 from "./../Sections/IndexSections/Section3/IndexSection3";
import ScrollSection from "./../Sections/IndexSections/ScrollSection/ScrollSection";

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
