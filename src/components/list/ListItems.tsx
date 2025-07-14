import type { Budget } from "../../types/types";

export type BudgetListProps = {
	budgets: Budget[];
};

export const ListItems: React.FC<BudgetListProps> = ({ budgets }) => {
	return (
		<article className="list__box">
			<div>
				{budgets.map((budget) => (
					<article key={budget.id} className="card">
						<div className="card__list">
							<div className="card__list__item">
								<h3 className="heading">{budget.clientName}</h3>
								<p className="text__body">{budget.clientMail}</p>
								<p className="text__body">{budget.clientPhone}</p>
								<p className="text__body">{budget.date}</p>
							</div>
							<div className="card__list__item">
								<p className="text__body">Serveis contractats:</p>
								<ul className="text__body">
									{budget.selectedServices
										.sort((a, b) => Number(a.id) - Number(b.id))
										.map((service) => (
											<li key={service.id} className="text__body">
												{service.id === "3"
													? `${service.name} (${budget.pages} pàgines, ${budget.languages} idiomes)`
													: service.name}
											</li>
										))}
								</ul>
							</div>
							<div className="card__list__item">
								<p className="text__body">Total:</p>
								<p className="heading">{budget.total}€</p>
							</div>
						</div>
					</article>
				))}
			</div>
		</article>
	);
};

export default ListItems;
