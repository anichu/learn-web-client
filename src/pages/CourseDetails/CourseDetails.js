import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { HiCheck } from "react-icons/hi2";

const CourseDetails = () => {
	const course = useLoaderData();
	const { name, image, rating, description, obtains, duration, id } = course;
	console.log(course);
	return (
		<div className="mx-5">
			<img src={image} className="h-[300px] w-[600px] mx-auto mt-5" alt="" />
			<h1 className="mt-3 text-4xl text-left">{name} </h1>

			<h4 className="my-6 text-3xl font-semibold">What you'll learn</h4>
			<div className="p-5 border rounded-md">
				{obtains.map((obtain, idx) => {
					return (
						<div key={idx} className="flex items-center mt-2 text-xl">
							<p className="mr-2 text-white bg-green-500 rounded-full">
								{<HiCheck></HiCheck>}
							</p>
							<p>{obtain}</p>
						</div>
					);
				})}
			</div>
			<p className="mt-5 text-xl">
				<b className="">Description: </b>
				{description}
			</p>
			<div className="flex items-center mt-3 text-xl">
				<p>
					<span className="font-semibold">Rating:</span>{" "}
					<span className="px-5 text-white bg-purple-900 rounded-full">
						{rating}
					</span>{" "}
					out of 5
				</p>

				<p className="ml-3">
					<span className="font-semibold">Duration:</span>
					{duration}
				</p>
			</div>

			<div className="my-10 text-center">
				<Link to="">
					<button className="px-5 py-3 text-white bg-purple-900">
						Get Premium Access
					</button>
				</Link>
			</div>
		</div>
	);
};

export default CourseDetails;
