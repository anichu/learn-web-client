import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { UserContext } from "../../contexts/UserProvider";
import { useLocation, useNavigate } from "react-router-dom";
const Register = ({ setLogin }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [error, setError] = useState("");
	const [accepted, setAccepted] = useState(false);
	const {
		createUser,
		updateUserProfile,
		verifyEmail,
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

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				setError("");
				form.reset();
				handleUpdateUserProfile(username, photoUrl);
				handleEmailVerification();
			})
			.catch((e) => {
				console.error(e);
				setError(e.message);
			});
	};

	const googleSignIn = () => {
		handleGoogleSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error("error: ", error);
			});
	};

	const githubSignin = () => {
		handleGithubSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error("error: ", error);
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

	const handleEmailVerification = () => {
		verifyEmail()
			.then(() => {})
			.catch((error) => console.error(error));
	};

	const handleAccepted = (event) => {
		setAccepted(event.target.checked);
	};

	return (
		<div className="w-full">
			<form onSubmit={handleSubmit} className="w-1/3 mx-auto my-10">
				<h1 className="text-center text-4xl mb-6">Create an account</h1>
				<div>
					<label className="block my-3 font-semibold" htmlFor="username">
						Username
					</label>
					<input className="w-full" type="text" name="username" />
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
					Signup
				</button>

				<h3 className="text-2xl text-center my-4 font-semibold">
					--Or Signup with--
				</h3>

				<div>
					<button
						onClick={googleSignIn}
						className="w-full flex items-center justify-center mt-5 bg-[#1F2937] hover:bg-[#131d2b] text-white py-2"
					>
						<FcGoogle className="w-6 h-6"></FcGoogle>
						<span className="text-xl ml-1">Google</span>
					</button>
				</div>
				<div>
					<button
						onClick={githubSignin}
						className="w-full flex items-center justify-center mt-5 bg-[#1F2937] hover:bg-[#131d2b] text-white py-2"
					>
						<FaGithub className="w-6 h-6"></FaGithub>
						<span className="text-xl ml-1">Github</span>
					</button>
				</div>
				<p className="mt-3">
					Already have an account?{" "}
					<button
						className="text-2xl font-bold text-[#1F2937]"
						onClick={() => setLogin((prev) => !prev)}
					>
						{" "}
						Login
					</button>
				</p>
			</form>
		</div>
	);
};

export default Register;
