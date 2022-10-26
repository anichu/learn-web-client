import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="flex items-center justify-center banner">
			<div>
				<h1 className="mt-5 mb-5 text-2xl font-semibold text-center text-white shadow sm:mt-0 sm:mb-10 sm:text-4xl">
					Welcome to LearnWeb WebSite
				</h1>
				<p className="text-xl text-center text-white sm:text-2xl">
					It is a website where you can find out different courses.{" "}
					<br className="hidden sm:block" /> The courses is based on web
					development.{" "}
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
