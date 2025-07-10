export const BudgetForm = (): JSX.Element => {
	return (
		<article className="card">
			<form className="budget-form">
				<div className="card__item">
					<h2 className="heading">Demanar pressupost</h2>
				</div>
				<div className="card__item">
					<span className="text__body">Nom:</span>
					<input type="text" className="budget-form__input" placeholder="Nom" />
				</div>
				<div className="card__item">
					<span className="text__body">Telèfon:</span>
					<input
						type="tel"
						className="budget-form__input"
						placeholder="Telèfon"
					/>
				</div>
				<div className="card__item">
					<span className="text__body">Email:</span>
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
		</article>
	);
};

export default BudgetForm;
