import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { UserContext } from "../../contexts/UserProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Register = ({ setLogin }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [error, setError] = useState("");
	const {
		createUser,
		updateUserProfile,
		handleGithubSignIn,
		handleGoogleSignIn,
	} = useContext(UserContext);
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const username = form.username.value;
		const photoUrl = form.imageUrl.value;
		const email = form.email.value;
		const password = form.password.value;

		if (password.length < 6) {
			setError("Password should be at least 6 characters");
			return;
		}

		createUser(email, password)
			.then((result) => {
				// const user = result.user;
				// console.log(user);
				setError("");
				form.reset();
				handleUpdateUserProfile(username, photoUrl);
				navigate(from, { replace: true });
			})
			.catch((e) => {
				console.error(e);
				setError(e.message);
			});
	};

	const googleSignIn = () => {
		handleGoogleSignIn()
			.then((result) => {
				// const user = result.user;
				// console.log(user);
				setError("");
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error("error: ", error.message);
				setError(error.message);
			});
	};

	const githubSignin = () => {
		handleGithubSignIn()
			.then((result) => {
				setError("");
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error("error: ", error.message);
				setError(error.message);
			});
	};

	const handleUpdateUserProfile = (name, photoURL) => {
		const profile = {
			displayName: name,
			photoURL: photoURL,
		};

		updateUserProfile(profile)
			.then(() => {})
			.catch((error) => console.error(error));
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
				<h1 className="mt-3 mb-6 text-4xl text-center">Create an account</h1>
				<div>
					<label className="block my-3 font-semibold" htmlFor="username">
						Username
					</label>
					<input className="w-full" required type="text" name="username" />
				</div>
				<div>
					<label className="block my-3 font-semibold" htmlFor="username">
						Image Url
					</label>
					<input className="w-full" type="text" name="imageUrl" />
				</div>
				<div>
					<label className="block my-3 font-semibold" htmlFor="email">
						Email
					</label>
					<input className="w-full" type="email" required name="email" />
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
					Signup
				</button>

				<h3 className="my-4 text-2xl font-semibold text-center">
					--Or Signup with--
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
					Already have an account?{" "}
					<Link
						to="/login"
						className="px-4 py-1 text-white bg-purple-700 rounded-md"
					>
						Login
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Register;
