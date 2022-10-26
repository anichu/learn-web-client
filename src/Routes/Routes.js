import { createBrowserRouter } from "react-router-dom";
import Courses from "../Layout/Courses";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Checkout from "../pages/Checkout/Checkout";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Faq from "../pages/Faq/Faq";
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
							return fetch("https://learn-web-server-ten.vercel.app/courses");
						},
						element: <Cards></Cards>,
					},
					{
						path: "/courses/:categoryName",
						loader: ({ params }) => {
							return fetch(
								`https://learn-web-server-ten.vercel.app/courses/${params.categoryName}`
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
						`https://learn-web-server-ten.vercel.app/course-details/${params.courseId}`
					);
				},
				element: <CourseDetails></CourseDetails>,
			},
			{
				path: "/checkout/:id",
				loader: ({ params }) => {
					return fetch(
						`https://learn-web-server-ten.vercel.app/checkout/${params.id}`
					);
				},
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
			{
				path: "/faq",
				element: <Faq></Faq>,
			},
		],
	},
	{
		path: "*",
		element: <RouterErrorHandler></RouterErrorHandler>,
	},
]);
