import { Link } from "react-router-dom";
import App from "../App";

export const Calculator = (): JSX.Element => (
	<div>
		<Link to="/">
			<button className="welcome-card__button">Tornar a benvinguda</button>
		</Link>
		<App />
	</div>
);
