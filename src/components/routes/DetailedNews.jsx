import React from "react";
import Header from "./../Header/Header";
import Navigation from "./../Navigation/Navigation";
import CustomBreadCrumb from "./../CustomBreadCrumb/CustomBreadCrumb";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import MainBox from "./../MainBox/MainBox";
import SidePanel from "./../SidePanel/SidePanel";
import Footer from "./../Footer/Footer";
import { useParams } from "react-router-dom";
import ImageGetter from "../ImageGetter/ImageGetter";

function DetailedNews() {
	let { news } = useParams();
	return (
		<div>
			<Header></Header>
			<Navigation></Navigation>
			<CustomBreadCrumb></CustomBreadCrumb>
			<Container>
				<Row>
					<Col md={8}>
						<Row>
							<Col md={12}>
								<h1>{news}</h1>

								{/* <img src={image} alt="" /> */}
							</Col>
							<Col md={12}>
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/zcrUCvBD16k"
									frameborder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</Col>
						</Row>
					</Col>
					<Col md={4}>
						<SidePanel></SidePanel>
					</Col>
				</Row>
			</Container>
			<Footer></Footer>
		</div>
	);
}

export default DetailedNews;
