import { useState } from "react";

import type { Budget } from "../../types/types";
import { ShareUrlModal } from "../modals/ShareUrlModal";
import { buildBudgetQuery, type BudgetParams } from "../../utils/urlUtils";

export type BudgetListProps = {
	budgets: Budget[];
};

export const ListItems: React.FC<BudgetListProps> = ({ budgets }) => {
	// const [showPortalHelp, setShowPortalHelp] = useState(false);
	const [showPortalHelp, setShowPortalHelp] = useState<string | null>(null);

	return (
		<>
			{budgets.map((budget) => {
				// 1) Construeix aquí mateix el BudgetParams per a aquest budget
				const params: BudgetParams = {
					seo: budget.selectedServices.some((service) => service.id === "1"),
					ads: budget.selectedServices.some((service) => service.id === "2"),
					web: budget.selectedServices.some((service) => service.id === "3"),
					pages: budget.pages ?? 1,
					lang: budget.languages ?? 1,
				};

				console.log("aquiii", params.pages, budget.clientName);
				// 2) Genera la query-string només amb buildBudgetQuery
				const queryString = buildBudgetQuery(params);
				const shareUrl =
					window.location.origin + window.location.pathname + "?" + queryString;

				return (
					<article className="list__box">
						<div>
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
										<button
											type="button"
											className="button__icon card__share-button"
											aria-label="Compartir pressupost"
											onClick={() => {
												setShowPortalHelp(budget.id);
											}}
										>
											📋
										</button>
									</div>
								</div>
							</article>
						</div>
						{showPortalHelp === budget.id && (
							<ShareUrlModal
								title={`Hola, ${budget.clientName}`}
								message={shareUrl}
								onClose={() => setShowPortalHelp(null)}
							></ShareUrlModal>
						)}
					</article>
				);
			})}
		</>
	);
};

export default ListItems;
