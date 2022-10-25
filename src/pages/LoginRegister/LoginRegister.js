import React, { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";

const LoginRegister = () => {
	const [login, setLogin] = useState(true);

	return (
		<div>
			{login ? (
				<Login setLogin={setLogin}></Login>
			) : (
				<Register setLogin={setLogin}></Register>
			)}
		</div>
	);
};

export default LoginRegister;
