import React from "react";
import img1 from "./img/s3-img1.jpg";
import img2 from "./img/s3-img2.jpg";
import img3 from "./img/s3-img3.jpg";
import pinarayi from "./img/pinarayi.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Column from "./../../../Layouts/Column/Column";
import ColorBox from "../../../ColorBox/ColorBox";

function IndexSection3() {
	return (
		<Container fluid className="my-5">
			<Row>
				<Col md={4} className="px-5">
					<Row>
						<ColorBox
							title="GULF"
							img={img1}
							color="#A7226E"
							text="കേസ് ഏറ്റെടുത്ത് ഒറ്റദിവസം കൊണ്ട് പ്രതികളെ പിടികൂടി എൻഎഎ മികവ് തെളിയിച്ചു. ഒപ്പം കസ്റ്റംസിനു പിന്നാല"
						></ColorBox>
					</Row>
					<Row>
						<Column
							img={pinarayi}
							text="കേരള പൊലീസിനു ക്ഷീണം; 24 മണിക്കൂറിൽ പ്രതികളെ വലയിലാക്കി എൻഐഎ മികവ്..."
						></Column>
						<Column
							img={pinarayi}
							text="കേരള പൊലീസിനു ക്ഷീണം; 24 മണിക്കൂറിൽ പ്രതികളെ വലയിലാക്കി എൻഐഎ മികവ്..."
						></Column>
					</Row>
				</Col>
				<Col md={4} className="px-5">
					<ColorBox
						title="BUSINESS"
						img={img2}
						color="#355C7D"
						text="കേസ് ഏറ്റെടുത്ത് ഒറ്റദിവസം കൊണ്ട് പ്രതികളെ പിടികൂടി എൻഎഎ മികവ് തെളിയിച്ചു. ഒപ്പം കസ്റ്റംസിനു പിന്നാല"
					></ColorBox>
					<Row></Row>
					<Row>
						<Column
							img={pinarayi}
							text="കേരള പൊലീസിനു ക്ഷീണം; 24 മണിക്കൂറിൽ പ്രതികളെ വലയിലാക്കി എൻഐഎ മികവ്..."
						></Column>
						<Column
							img={pinarayi}
							text="കേരള പൊലീസിനു ക്ഷീണം; 24 മണിക്കൂറിൽ പ്രതികളെ വലയിലാക്കി എൻഐഎ മികവ്..."
						></Column>
					</Row>
				</Col>
				<Col md={4} className="px-5">
					<ColorBox
						title="ENTERTAINMENT"
						img={img3}
						color="#2F9599"
						text="കേസ് ഏറ്റെടുത്ത് ഒറ്റദിവസം കൊണ്ട് പ്രതികളെ പിടികൂടി എൻഎഎ മികവ് തെളിയിച്ചു. ഒപ്പം കസ്റ്റംസിനു പിന്നാല"
					></ColorBox>
					<Row></Row>
					<Row>
						<Column
							img={pinarayi}
							text="കേരള പൊലീസിനു ക്ഷീണം; 24 മണിക്കൂറിൽ പ്രതികളെ വലയിലാക്കി എൻഐഎ മികവ്..."
						></Column>
						<Column
							img={pinarayi}
							text="കേരള പൊലീസിനു ക്ഷീണം; 24 മണിക്കൂറിൽ പ്രതികളെ വലയിലാക്കി എൻഐഎ മികവ്..."
						></Column>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default IndexSection3;
