import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(UserContext);
	const location = useLocation();

	if (loading) {
		return <div className="text-center">Loading..</div>;
	}

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
	}
	return children;
};

export default PrivateRoute;
