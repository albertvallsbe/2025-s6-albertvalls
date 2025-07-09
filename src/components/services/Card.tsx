import type { CardProps } from "../../types/types";
import { WebCardOptions } from "./WebCardOptions";

export const Card = ({
	card,
	controls,
	webOptionsProps,
}: CardProps): JSX.Element => {
	const { checked = false, onToggle = () => {} } = controls ?? {};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onToggle(card.id, event.target.checked);
	};

	const isWebCard = card.id === 3;

	return (
		<article className={`card`}>
			<div className="card__item">
				<h2 className="heading">{card.title}</h2>
				<p className="text__body">{card.description}</p>
			</div>
			<div className="card__section">
				<div className="card__item">
					<p className="heading__medium">{card.price}€</p>
				</div>
				<div className="card__toggle">
					<input
						type="checkbox"
						checked={checked}
						onChange={handleChange}
						aria-label={`Afegir ${card.title}`}
					/>
					<p className="text">Afegir</p>
				</div>
			</div>

			{isWebCard && webOptionsProps && <WebCardOptions {...webOptionsProps} />}
		</article>
	);
};
