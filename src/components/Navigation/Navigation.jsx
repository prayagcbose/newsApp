import React from "react";
import "./Navigation.css";
import { FaSearch, FaYoutube, FaEllipsisH } from "react-icons/fa";
import {
	Navbar,
	NavDropdown,
	Form,
	FormControl,
	Button,
	Nav,
	Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<Navbar bg="light" expand="lg" sticky="top">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="d-flex justify-content-around w-100 px-5 shadow rounded">
					<Nav.Link bsPrefix="Nav-Btn">
						<Link to="/">
							<button className="Nav-Btn">Home</button>
						</Link>
					</Nav.Link>
					<Nav.Link bsPrefix="Nav-Btn">
						<Link to="/SpecificNews/Kerala">
							<button className="Nav-Btn">Kerala</button>
						</Link>
					</Nav.Link>
					<Nav.Link bsPrefix="Nav-Btn">
						<Link to="/SpecificNews/India">
							<button className="Nav-Btn">India</button>
						</Link>
					</Nav.Link>
					<Nav.Link bsPrefix="Nav-Btn">
						<Link to="/SpecificNews/Gulf">
							<button className="Nav-Btn">Gulf</button>
						</Link>
					</Nav.Link>
					<Nav.Link bsPrefix="Nav-Btn">
						<Link to="/SpecificNews/Videos">
							<button className="Nav-Btn">Videos</button>
						</Link>
					</Nav.Link>
					<Nav.Link bsPrefix="Nav-Btn">
						<Link to="/SpecificNews/Sports">
							<button className="Nav-Btn">sports</button>
						</Link>
					</Nav.Link>
					<Nav.Link bsPrefix="Nav-Btn">
						<Link to="/SpecificNews/Entertainment">
							<button className="Nav-Btn">entertainment</button>
						</Link>
					</Nav.Link>
					<Nav.Link href="#home">
						<Dropdown>
							<Dropdown.Toggle className="Nav-Btn" variant="light">
								<span>
									<FaEllipsisH
										size="2rem"
										style={{ color: "rgb(48, 46, 46)" }}
									></FaEllipsisH>
								</span>
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">Buzz</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Fizz</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Guzz</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
