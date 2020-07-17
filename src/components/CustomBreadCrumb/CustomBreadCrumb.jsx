import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "./CustomBreadCrumb.css";

function CustomBreadCrumb() {
	return (
		<div className="bg my-3 mx-4">
			<Breadcrumb className="mb-0">
				<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
				<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
				<Breadcrumb.Item active>Data</Breadcrumb.Item>
			</Breadcrumb>
		</div>
	);
}

export default CustomBreadCrumb;
