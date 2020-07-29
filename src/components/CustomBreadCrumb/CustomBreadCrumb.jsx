import React, { useState, useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import "./CustomBreadCrumb.css";
import { useLocation } from "react-router-dom";

function CustomBreadCrumb() {
	const [path, setPath] = useState();
	let location = useLocation();
	useEffect(() => {
		setPath(location.pathname);
	});

	return (
		<div className="bg my-3 mx-4">
			<Breadcrumb className="mb-0">
				{/* <Breadcrumb.Item href="#"></Breadcrumb.Item> */}

				<Breadcrumb.Item active>{path}</Breadcrumb.Item>
			</Breadcrumb>
		</div>
	);
}

export default CustomBreadCrumb;
