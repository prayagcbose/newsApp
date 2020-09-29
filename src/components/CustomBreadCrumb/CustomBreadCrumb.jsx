import React, { useState, useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import "./CustomBreadCrumb.css";
import { useLocation, Link } from "react-router-dom";

function CustomBreadCrumb() {
	const [path, setPath] = useState([]);
	let location = useLocation();
	useEffect(() => {
		let temp = location.pathname.split("/");
		setPath(temp);
	}, [location]);

	return (
		<div className="bg my-3 mx-4">
			<Breadcrumb className="mb-0">
				<Breadcrumb.Item>
					<Link to="/">Home</Link>
				</Breadcrumb.Item>
				{path.map((item, index) => {
					if (index === 0 || index === path.length - 1) {
						return null;
					} else {
						return (
							<Breadcrumb.Item key={index}>
								<Link to={`/`}>{item}</Link>
							</Breadcrumb.Item>
						);
					}
				})}
				<Breadcrumb.Item active>{path[path.length - 1]}</Breadcrumb.Item>
			</Breadcrumb>
		</div>
	);
}

export default CustomBreadCrumb;
