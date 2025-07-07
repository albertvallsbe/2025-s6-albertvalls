import type { WebOptionsProps } from "../types/types";

export const WebOptions = ({
	webPages,
	webLanguages,
	onIncrementPages,
	onDecrementPages,
	onIncrementLanguages,
	onDecrementLanguages,
}: WebOptionsProps): JSX.Element => {
	const isPagesDecrementDisabled = webPages <= 1;
	const isLanguagesDecrementDisabled = webLanguages <= 1;

	return (
		<div className="web-options">
			<div className="web-options__control">
				<span className="web-options__label">Nombre de pàgines:</span>
				<button
					type="button"
					onClick={onDecrementPages}
					disabled={isPagesDecrementDisabled}
					aria-label="Treure una pàgina"
				>
					–
				</button>
				<input
					id="pages-input"
					className="web-options__value"
					type="number"
					value={webPages}
					min={1}
					// readOnly
					aria-label={`${webPages} pàgines seleccionades`}
				/>
				<button
					type="button"
					onClick={onIncrementPages}
					aria-label="Afegir una pàgina"
				>
					+
				</button>
			</div>

			<div className="web-options__control">
				<span className="web-options__label">Nombre d'idiomes:</span>
				<button
					type="button"
					onClick={onDecrementLanguages}
					disabled={isLanguagesDecrementDisabled}
					aria-label="Treure un idioma"
				>
					–
				</button>
				<input
					id="languages-input"
					className="web-options__value"
					type="number"
					value={webLanguages}
					min={1}
					// readOnly
					aria-label={`${webLanguages} idiomes seleccionats`}
				/>
				<button
					type="button"
					onClick={onIncrementLanguages}
					aria-label="Afegir un idioma"
				>
					+
				</button>
			</div>
		</div>
	);
};
