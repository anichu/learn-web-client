import { createBrowserRouter } from "react-router-dom";
import Courses from "../Layout/Courses";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Cards from "../pages/Shared/Cards/Cards";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/courses",
				element: <Courses></Courses>,
				children: [
					{
						path: "/courses",
						loader: () => {
							return fetch("http://localhost:5000/courses");
						},
						element: <Cards></Cards>,
					},
					{
						path: "/courses/:categoryName",
						loader: ({ params }) => {
							return fetch(
								`http://localhost:5000/courses/${params.categoryName}`
							);
						},
						element: <Cards></Cards>,
					},
				],
			},
		],
	},
]);
