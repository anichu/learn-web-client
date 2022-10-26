import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Category from "../pages/Shared/Category/Category";

const Courses = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("https://learn-web-server-ten.vercel.app/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="mx-5 my-5">
			<div className="sm:flex">
				<div className="left-side sm:w-[200px]">
					{categories.map((category) => {
						return <Category category={category} key={category.id}></Category>;
					})}
				</div>
				<div className="flex-1 ml-5 right-side">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default Courses;
