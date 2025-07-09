import { Link } from "react-router-dom";
import BudgetSummary from "../components/budget/BudgetSummary";

export const BudgetPage = (): JSX.Element => (
	<div>
		<Link to="/">
			<button className="welcome-card__button">Tornar a benvinguda</button>
		</Link>
		<BudgetSummary />
	</div>
);
