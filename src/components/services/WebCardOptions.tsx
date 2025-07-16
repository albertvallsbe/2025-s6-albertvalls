import { useState } from "react";
import type { WebOptionsProps } from "../../types/types";
import { InLineHelpModal } from "../modals/InLineHelpModal";
import { OptionsHelpModal } from "../modals/OptionsHelpModal";

export const WebCardOptions = ({
	webPagesCounter,
	webLanguagesCounter,
}: WebOptionsProps): JSX.Element => {
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

		if (!isNaN(raw)) {
			if (raw < 1) return decrementPages();
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

	const [showInlineHelp, setShowInlineHelp] = useState(false);
	const [showPortalHelp, setShowPortalHelp] = useState(false);
	const handlePagesHelp = () => setShowInlineHelp(true);
	const handleCloseHelp = () => setShowInlineHelp(false);

	return (
		<div className="web-options">
			<div className="web-options__control">
				<button
					type="button"
					className="web-options__info"
					onClick={handlePagesHelp}
					aria-label="Ajuda Nombre de pàgines"
				>
					ℹ️
				</button>
				<span className="web-options__label">Nombre de pàgines:</span>
				<button
					className="button__icon"
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
					className="button__icon"
					type="button"
					onClick={incrementPages}
					disabled={!canIncrementPages}
					aria-label="Afegir una pàgina"
				>
					+
				</button>
			</div>

			<div className="web-options__control">
				<button
					type="button"
					onClick={() => setShowPortalHelp(true)}
					className="web-options__info"
					aria-label="Ajuda Nombre de pàgines"
				>
					ℹ️
				</button>
				<span className="web-options__label">Nombre d'idiomes:</span>
				<button
					className="button__icon"
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
					value={languages}
					onChange={handleLanguagesChange}
					min={1}
					aria-label={`${languages} idiomes seleccionats`}
				/>
				<button
					className="button__icon"
					type="button"
					onClick={incrementLanguages}
					disabled={!canIncrementLanguages}
					aria-label="Afegir un idioma"
				>
					+
				</button>
			</div>

			{showInlineHelp && (
				<InLineHelpModal
					title="Nombre de pàgines"
					message="Indica quantes pàgines vols incloure al teu projecte. El cost s'actualitzarà automàticament."
					onClose={handleCloseHelp}
				/>
			)}

			{showPortalHelp && (
				<OptionsHelpModal
					title="Nombre d'idiomes"
					message="Indica en quants idiomes estarà disponible les pàgines que incloguis al teu projecte. El cost s'actualitzarà automàticament."
					onClose={() => setShowPortalHelp(false)}
				></OptionsHelpModal>
			)}
		</div>
	);
};
