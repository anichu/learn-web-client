import React from "react";
import Carousel from "../Shared/Carousel/Carousel";

const Home = () => {
	console.log("anis",process.env.REACT_APP_apiKey);
	return (
		<div>
			<h1>Home {}</h1>
			<Carousel></Carousel>
		</div>
	);
};

export default Home;
