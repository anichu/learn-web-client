import React, { useContext } from "react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserProvider";

const Login = ({ setLogin }) => {
	const [error, setError] = useState("");
	const { signIn, setLoading } = useContext(UserContext);
	const navigate = useNavigate();
	const location = useLocation();

	const handleSubmit = (event) => {
		const from = location.state?.from?.pathname || "/";
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
	return (
		<div className="w-full">
			<form onSubmit={handleSubmit} className="w-1/3 mx-auto my-10">
				<h1 className="text-center text-4xl mb-6">Login</h1>
				<div>
					<label className="block my-3 font-semibold" htmlFor="email">
						Email
					</label>
					<input className="w-full" type="email" name="email" />
				</div>
				<div>
					<label className="block my-3" htmlFor="password">
						Passowrd
					</label>
					<input className="w-full" type="password" name="password" />
				</div>
				<button
					type="submit"
					className="w-full mt-5 bg-[#1F2937] hover:bg-[#131d2b] text-white py-2"
				>
					Login
				</button>

				<h3 className="text-2xl text-center my-4 font-semibold">
					--Or Signin with--
				</h3>

				<div>
					<button className="w-full flex items-center justify-center mt-5 bg-[#1F2937] hover:bg-[#131d2b] text-white py-2">
						<FcGoogle className="w-6 h-6"></FcGoogle>
						<span className="text-xl ml-1">Google</span>
					</button>
				</div>
				<div>
					<button className="w-full flex items-center justify-center mt-5 bg-[#1F2937] hover:bg-[#131d2b] text-white py-2">
						<FaGithub className="w-6 h-6"></FaGithub>
						<span className="text-xl ml-1">Google</span>
					</button>
				</div>

				<p className="mt-3">
					Don’t have an account yet?{" "}
					<button
						className="text-2xl font-bold text-[#1F2937]"
						onClick={() => setLogin((prev) => !prev)}
					>
						{" "}
						Signup
					</button>
				</p>
			</form>
		</div>
	);
};

export default Login;
