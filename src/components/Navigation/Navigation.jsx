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

function Navigation() {
	return (
		<Navbar bg="light" expand="lg" sticky="top">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="d-flex justify-content-around w-100 px-5 shadow rounded">
					<Nav.Link bsPrefix="Nav-Btn" href="#home">
						Home
					</Nav.Link>
					<Nav.Link bsPrefix="Nav-Btn" href="#home">
						Home
					</Nav.Link>
					<Nav.Link bsPrefix="Nav-Btn" href="#home">
						Home
					</Nav.Link>
					<Nav.Link bsPrefix="Nav-Btn" href="#home">
						Home
					</Nav.Link>
					<Nav.Link bsPrefix="Nav-Btn" href="#home">
						Home
					</Nav.Link>
					<Nav.Link bsPrefix="Nav-Btn" href="#home">
						Home
					</Nav.Link>
					<Nav.Link bsPrefix="Nav-Btn" href="#home">
						Home
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
