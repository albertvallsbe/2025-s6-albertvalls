import { Link } from "react-router-dom";

export const Welcome = (): JSX.Element => (
	<>
		<article className="card welcome-card">
			{/* Cos principal, reutilitza .card__item per a text */}
			<div className="card__item">
				<h1 className="card__title">Benvingut/da!</h1>
				<p className="card__text">
					Aquí podràs calcular el cost del teu projecte escollint serveis.
				</p>
			</div>
		</article>
		<Link to="/calculator">
			<button className="welcome-card__button">Entrar a la calculadora</button>
		</Link>
	</>
);
