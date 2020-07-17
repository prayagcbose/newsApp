import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "./img/main-news1.jpg";
import img2 from "./img/main-news2.jpg";
import img3 from "./img/main-news3.jpg";
import img4 from "./img/pinarayi.jpg";
import "./ControlledCarousel.css";

function ControlledCarousel() {
	return (
		<div>
			<Carousel interval="1000" indicators={false}>
				<Carousel.Item>
					<div className="img-container">
						<img src={img1} alt="First slide" />
					</div>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<div className="img-container">
						<img src={img2} alt="First slide" />
					</div>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<div className="img-container">
						<img src={img3} alt="First slide" />
					</div>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<div className="img-container">
						<img src={img4} alt="First slide" />
					</div>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			{/* <Carousel interval="1000">
				<Carousel.Item>
					<div className="img-container">
						<img src={img1} alt="First slide" />
					</div>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<div className="img-container">
						<img src={img2} alt="Third slide" />
					</div>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<div className="img-container">
						<img src={img3} alt="Third slide" />
					</div>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<div className="img-container">
						<img src={img4} alt="Third slide" />
					</div>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel> */}
		</div>
	);
}

export default ControlledCarousel;
