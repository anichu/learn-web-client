import { createBrowserRouter } from "react-router-dom";
import Courses from "../Layout/Courses";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Checkout from "../pages/Checkout/Checkout";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Cards from "../pages/Shared/Cards/Cards";
import RouterErrorHandler from "../RouterErrorHandler";
import PrivateRoute from "./PrivateRoute";

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
			{
				path: "/course-details/:courseId",
				loader: ({ params }) => {
					return fetch(
						`http://localhost:5000/course-details/${params.courseId}`
					);
				},
				element: <CourseDetails></CourseDetails>,
			},
			{
				path: "/checkout",
				element: (
					<PrivateRoute>
						<Checkout></Checkout>
					</PrivateRoute>
				),
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
		],
	},
	{
		path: "*",
		element: <RouterErrorHandler></RouterErrorHandler>,
	},
]);
