import React from "react";
import "./KeralaSection.css";
import { Container, Col, Row } from "react-bootstrap";

import pinarayi from "./img/pinarayi.jpg";
import ad4 from "./img/ad-4.jpg";
import Column from "../../../Layouts/Column/Column";
import SectionContainer from "./../SectionContainer/SectionContainer";
import adManorama from "./img/ad-manorama.png";

function KeralaSection() {
	return (
		<SectionContainer title="kerala">
			<Row className="d-flex justify-content-start align-items-stretch m-5">
				<Col md={4} className="p-5">
					<Row className="d-flex justify-content-start align-items-stretch">
						<img src={pinarayi}></img>
					</Row>
					<Row className="d-flex justify-content-start align-items-stretch">
						<p className="img-main-title">
							കേരള പൊലീസിനു ക്ഷീണം; 24 മണിക്കൂറിൽ പ്രതികളെ വലയിലാക്കി എൻഐഎ
							മികവ്...
						</p>
						<p className="img-main-text">
							കേസ് ഏറ്റെടുത്ത് ഒറ്റദിവസം കൊണ്ട് പ്രതികളെ പിടികൂടി എൻഎഎ മികവ്
							തെളിയിച്ചു. ഒപ്പം കസ്റ്റംസിനു പിന്നാല
						</p>
					</Row>
				</Col>
				<Col md={4} className="p-5">
					<Row className="d-flex justify-content-start align-items-stretch">
						<Column
							img={pinarayi}
							text="കേരള പൊലീസിനു ക്ഷീണം; 24 മണിക്കൂറിൽ പ്രതികളെ വലയിലാക്കി എൻഐഎ മികവ്..."
						></Column>
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
				<Col md={4} className="p-5">
					<Row className="d-flex justify-content-start align-items-stretch">
						<Column
							img={pinarayi}
							text="കേരള പൊലീസിനു ക്ഷീണം; 24 മണിക്കൂറിൽ പ്രതികളെ വലയിലാക്കി എൻഐഎ മികവ്..."
						></Column>
					</Row>
					<Row className="d-flex justify-content-center">
						<div>
							<img src={ad4}></img>
						</div>
					</Row>
				</Col>
				<hr></hr>

				<Col className="my-5">
					<img src={adManorama} alt="ad-manorama" />
				</Col>
			</Row>
		</SectionContainer>
	);
}

export default KeralaSection;
