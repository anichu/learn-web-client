import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Shared/Header/Header";
import lw from "./learn-web.png";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

function App() {
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
