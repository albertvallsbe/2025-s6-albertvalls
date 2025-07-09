import { Link } from "react-router-dom";
import BudgetSummary from "../components/budget/BudgetSummary";
import BudgetForm from "../components/budget/BudgetForm";

export const BudgetPage = (): JSX.Element => (
	<div>
		<Link to="/">
			<button className="welcome-card__button">Tornar a benvinguda</button>
		</Link>
		<BudgetSummary />
		<BudgetForm />
	</div>
);
