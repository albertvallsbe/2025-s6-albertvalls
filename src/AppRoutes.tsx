import { Routes, Route, Navigate } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage";
import { BudgetPage } from "./pages/BudgetPage";

const AppRoutes = (): JSX.Element => (
	<Routes>
		<Route path="/" element={<WelcomePage />} />
		<Route path="/budget" element={<BudgetPage />} />
		<Route path="*" element={<Navigate to="/" replace />} />
	</Routes>
);

export default AppRoutes;
