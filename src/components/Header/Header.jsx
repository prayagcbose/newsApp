import React from "react";
import "./Header.css";
import logo from "./img/logo.jpg";
import psc from "./img/psc.jpg";
import weather from "./img/weather.png";
import Navigation from "../Navigation/Navigation";
import {
	Container,
	Row,
	Col,
	Form,
	FormControl,
	Button,
	DropdownButton,
	Dropdown,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const date = new Date();
let today =
	days[date.getDay()] +
	" " +
	date.getDate() +
	", " +
	months[date.getMonth()] +
	" " +
	date.getFullYear();

function Header() {
	return (
		<Container fluid className="Header-Bg">
			<Row className="d-flex">
				<Col xs={0} md={6} lg={8}></Col>
				<Col
					xs={12}
					md={6}
					lg={4}
					className="d-flex justify-content-around align-items-center my-2"
				>
					<Form inline>
						<FormControl type="text" placeholder="Search" />
						<Button style={{ backgroundColor: "#800" }}>
							<FaSearch color="white" size="2rem"></FaSearch>
						</Button>
					</Form>
					<Button style={{ backgroundColor: "#800" }}>
						<h4>
							<span style={{ margin: "1rem" }}>
								<FaYoutube color="white" size="2rem"></FaYoutube>
							</span>
							Watch Online
						</h4>
					</Button>
					<Dropdown>
						<Dropdown.Toggle
							className="Header-Btn"
							style={{ backgroundColor: "#800" }}
							size="lg"
						>
							English
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Malayalam</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Col>
			</Row>
			<Row>
				<Col className="Header-Body">
					<Row>
						<Col className="center">
							<div className="logo">
								<img src={logo}></img>
							</div>
							<h1 className="date">{today}</h1>
						</Col>
						<Col>
							<div className="ad">
								<img src={psc}></img>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default Header;
