import React, { useContext } from "react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserProvider";

const Login = ({ setLogin }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [error, setError] = useState("");

	const { signIn, setLoading, handleGoogleSignIn, handleGithubSignIn } =
		useContext(UserContext);
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
				setError("");
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const googleSignIn = () => {
		handleGoogleSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
				console.log("anis", from);
				setError("");
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error("error: ", error);
				setError(error.message);
			});
	};

	const githubSignin = () => {
		handleGithubSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
				setError("");
				navigate(from, { replace: true });
			})
			.catch((error) => {
				setError(error.message);
				console.error("error: ", error);
			});
	};
	return (
		<div className="w-full">
			{error && (
				<p className="mt-3 text-2xl font-semibold text-center text-red-600">
					{error}
				</p>
			)}
			<form
				onSubmit={handleSubmit}
				className="w-full px-10 my-10 sm:mx-auto sm:w-1/2"
			>
				<h1 className="mb-6 text-4xl text-center">Login</h1>
				<div>
					<label className="block my-3 font-semibold" htmlFor="email">
						Email
					</label>
					<input className="w-full" type="email" name="email" required />
				</div>
				<div>
					<label className="block my-3" htmlFor="password">
						Passowrd
					</label>
					<input className="w-full" type="password" required name="password" />
				</div>
				<button
					type="submit"
					className="w-full mt-5 bg-[#1F2937] hover:bg-[#131d2b] text-white py-2"
				>
					Login
				</button>

				<h3 className="my-4 text-2xl font-semibold text-center">
					--Or Signin with--
				</h3>

				<div>
					<button
						onClick={googleSignIn}
						className="w-full flex items-center justify-center mt-5 bg-[#1F2937] hover:bg-[#131d2b] text-white py-2"
					>
						<FcGoogle className="w-6 h-6"></FcGoogle>
						<span className="ml-1 text-xl">Google</span>
					</button>
				</div>
				<div>
					<button
						onClick={githubSignin}
						className="w-full flex items-center justify-center mt-5 bg-[#1F2937] hover:bg-[#131d2b] text-white py-2"
					>
						<FaGithub className="w-6 h-6"></FaGithub>
						<span className="ml-1 text-xl">Github</span>
					</button>
				</div>

				<p className="mt-3">
					Don’t have an account yet?{" "}
					<Link
						to="/register"
						className="px-4 py-1 text-white bg-purple-700 rounded-md"
					>
						Signup
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
