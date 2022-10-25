import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const Register = ({ setLogin }) => {
	return (
		<div className="w-full">
			<form action="" className="w-1/3 mx-auto my-10">
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
					<input className="w-full" type="text" name="imageurl" />
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
				<h3 className="text-2xl text-center my-4 font-semibold">
					--Or Signup with--
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
			</form>
		</div>
	);
};

export default Register;
