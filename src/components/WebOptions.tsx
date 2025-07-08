import type { WebOptionsProps } from "../types/types";

// onIncrementPages,
// onDecrementPages,
// onIncrementLanguages,
// onDecrementLanguages,
export const WebOptions = ({
	webPagesCounter,
	webLanguagesCounter,
}: WebOptionsProps): JSX.Element => {
	// const isPagesDecrementDisabled = webPages <= 1;
	// const isLanguagesDecrementDisabled = webLanguages <= 1;
	const {
		value: pages,
		increment: incrementPages,
		decrement: decrementPages,
		canIncrement: canIncrementPages,
		canDecrement: canDecrementPages,
	} = webPagesCounter;

	const {
		value: languages,
		increment: incrementLanguages,
		decrement: decrementLanguages,
		canIncrement: canIncrementLanguages,
		canDecrement: canDecrementLanguages,
	} = webLanguagesCounter;

	const handlePagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const raw = Number(event.target.value);
		// clamp mínim
		if (!isNaN(raw)) {
			if (raw < 1) return decrementPages();
			// no hi ha màxim implícit; podríem comprovar canIncrement
		}
	};

	const handleLanguagesChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const raw = Number(event.target.value);
		if (!isNaN(raw)) {
			if (raw < 1) return decrementLanguages();
		}
	};

	return (
		<div className="web-options">
			<div className="web-options__control">
				<span className="web-options__label">Nombre de pàgines:</span>
				<button
					type="button"
					onClick={decrementPages}
					disabled={!canDecrementPages}
					aria-label="Treure una pàgina"
				>
					–
				</button>
				<input
					id="pages-input"
					className="web-options__value"
					type="number"
					min={1}
					value={pages}
					onChange={handlePagesChange}
					aria-label={`${pages} pàgines seleccionades`}
				/>
				<button
					type="button"
					onClick={incrementPages}
					disabled={!canIncrementPages}
					aria-label="Afegir una pàgina"
				>
					+
				</button>
			</div>

			<div className="web-options__control">
				<span className="web-options__label">Nombre d'idiomes:</span>
				<button
					type="button"
					onClick={decrementLanguages}
					disabled={!canDecrementLanguages}
					aria-label="Treure un idioma"
				>
					–
				</button>
				<input
					id="languages-input"
					className="web-options__value"
					type="number"
					// readOnly
					value={languages}
					onChange={handleLanguagesChange}
					min={1}
					aria-label={`${languages} idiomes seleccionats`}
				/>
				<button
					type="button"
					onClick={incrementLanguages}
					disabled={!canIncrementLanguages}
					aria-label="Afegir un idioma"
				>
					+
				</button>
			</div>
		</div>
	);
};
