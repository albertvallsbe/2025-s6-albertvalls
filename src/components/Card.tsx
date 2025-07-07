import type { CardProps } from "../types/types";
import { WebOptions } from "./WebOptions";

export const Card = ({
	card,
	controls,
	webOptionsProps,
}: CardProps): JSX.Element => {
	const { checked = false, onToggle = () => {} } = controls ?? {};

	const {
		pages = 1,
		languages = 1,
		onChangePages,
		onChangeLanguages,
	} = webOptionsProps ?? {};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onToggle(card.id, event.target.checked);
		console.log("card: ", card.id);
		console.log("check: ", event.target.checked);
	};

	const isWebCard = card.id === 3;

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
			{isWebCard && onChangePages && onChangeLanguages && (
				<WebOptions
					pages={pages}
					languages={languages}
					onChangePages={onChangePages}
					onChangeLanguages={onChangeLanguages}
				/>
			)}
		</article>
	);
};
