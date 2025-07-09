import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";
import AppRoutes from "./AppRoutes";
// import App from "./App";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* <App /> */}
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	</StrictMode>
);
