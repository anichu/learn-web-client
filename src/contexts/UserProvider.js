import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const UserContext = createContext();

//const auth = getAuth(app);
const UserProvider = ({ children }) => {
	console.log(children);
	const userInfo = {};
	return (
		<UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
	);
};

export default UserProvider;
