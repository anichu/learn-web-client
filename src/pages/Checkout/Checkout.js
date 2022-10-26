import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
	const course = useLoaderData();
	const { name, price, image } = course;

	return (
		<div>
			<img src={image} className="h-[300px] w-[600px] mx-auto mt-5" alt="" />
			<h1 className="mt-5 text-3xl text-center">{name}</h1>
			<p className="text-2xl text-center">
				<b>Price: </b>
				{price}Tk
			</p>
			<button className="block px-10 py-2 mx-auto mt-5 text-center text-white bg-purple-700 rounded hover:bg-purple-900">
				pay now
			</button>
		</div>
	);
};

export default Checkout;
