import React from "react";
import "./Navigation.css";
import { FaSearch } from "react-icons/fa";
import {
	Navbar,
	NavDropdown,
	Form,
	FormControl,
	Button,
	Nav,
} from "react-bootstrap";

function Navigation() {
	return (
		<div>
			<Navbar expand="md">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						<Form inline>
							<FormControl type="text" placeholder="Search" />
							<Button style={{ backgroundColor: "#800" }}>
								<FaSearch color="white" size="1.5rem"></FaSearch>
							</Button>
						</Form>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Navigation;
