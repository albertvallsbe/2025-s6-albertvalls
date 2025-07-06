import type { CardProps } from "../types/types";

export const Card = ({ card, controls }: CardProps): JSX.Element => {
	const { checked = false, onToggle = () => {} } = controls ?? {};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onToggle(card.id, event.target.checked);
		console.log("card: ", card.id);
		console.log("check: ", event.target.checked);
	};

	return (
		<article key={card.id} className={`card`}>
			<div className="card__item">
				<h2 className="card__title">{card.title}</h2>
				<p className="card__text">{card.description}</p>
			</div>
			<div className="card__section">
				<div className="card__item">
					<p className="card__price">{card.price}€</p>
				</div>
				<div className="card__toggle">
					<input
						type="checkbox"
						checked={checked}
						onChange={handleChange}
						aria-label={`Afegir ${card.title}`}
					/>
					<p className="card__text">Afegir</p>
				</div>
			</div>
		</article>
	);
};
