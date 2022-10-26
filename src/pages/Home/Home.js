import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Shared/Carousel/Carousel";

const Home = () => {
	return (
		<div className="flex items-center justify-center banner">
			<div>
				<h1 className="mb-10 text-4xl font-semibold text-center text-white shadow">
					Welcome to LearnWeb WebSite
				</h1>
				<p className="text-2xl text-center text-white">
					It is a website where you can find out different courses. <br /> The
					courses is based on web development.{" "}
				</p>
				<Link to="/courses">
					<button className="block px-10 py-2 mx-auto mt-5 text-center text-white bg-purple-700 rounded hover:bg-purple-900">
						explore yourself
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
