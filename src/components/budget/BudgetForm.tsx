export const BudgetForm = (): JSX.Element => {
	return (
		<form className="budget-form">
			<h2 className="budget-form__title">Demanar pressupost</h2>

			<div className="budget-form__fields">
				<span className="web-options__label">Nom:</span>
				<input type="text" className="budget-form__input" placeholder="Nom" />
			</div>
			<div className="budget-form__fields">
				<span className="web-options__label">Telèfon:</span>
				<input
					type="tel"
					className="budget-form__input"
					placeholder="Telèfon"
				/>
			</div>
			<div className="budget-form__fields">
				<span className="web-options__label">Email:</span>
				<input
					type="email"
					className="budget-form__input"
					placeholder="Email"
				/>
			</div>

			<button type="submit" className="button__text">
				Sol·licitar pressupost →
			</button>
		</form>
	);
};

export default BudgetForm;
