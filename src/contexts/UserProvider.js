import { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	GoogleAuthProvider,
	signInWithPopup,
	GithubAuthProvider,
} from "firebase/auth";

import app from "../firebase/firebase.config";

export const UserContext = createContext();

const auth = getAuth(app);
const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	const providerLogin = (provider) => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};

	const handleGoogleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (profile) => {
		return updateProfile(auth.currentUser, profile);
	};

	const verifyEmail = () => {
		return sendEmailVerification(auth.currentUser);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const userInfo = {
		user,
		loading,
		setLoading,
		providerLogin,
		logOut,
		updateUserProfile,
		verifyEmail,
		createUser,
		signIn,
		handleGoogleSignIn,
	};

	return (
		<UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
	);
};

export default UserProvider;
