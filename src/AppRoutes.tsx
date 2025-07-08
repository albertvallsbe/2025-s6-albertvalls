import { Routes, Route, Navigate } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Calculator } from "./pages/Calculator";

const AppRoutes = (): JSX.Element => (
	<Routes>
		<Route path="/" element={<Welcome />} />
		<Route path="/calculator" element={<Calculator />} />
		<Route path="*" element={<Navigate to="/" replace />} />
	</Routes>
);

export default AppRoutes;
