import { useState, useMemo } from "react";
import type { ItemCard } from "../../types/types";
import { Card } from "../services/Card";
import { useOptionsCounter } from "../../hooks/useOptionsCounter";
import dataCards from "../../data/dataCards.json";

const WEB_SERVICE_ID = 3;

const BudgetSummary = (): JSX.Element => {
	const servicesList: ItemCard[] = dataCards;

	const webPagesCounter = useOptionsCounter({
		initialValue: 1,
		minimumValue: 1,
	});
	const webLanguagesCounter = useOptionsCounter({
		initialValue: 1,
		minimumValue: 1,
	});

	const [selectedServices, setSelectedServices] = useState<number[]>([]);

	const toggleServices = (serviceId: number, isChecked: boolean) => {
		setSelectedServices((seleccionats) => {
			if (isChecked) {
				return seleccionats.includes(serviceId)
					? seleccionats
					: [...seleccionats, serviceId];
			}

			return seleccionats.filter(
				(identificador) => identificador !== serviceId
			);
		});
	};

	const totalBudget = useMemo(() => {
		const baseCount = servicesList
			.filter((service) => selectedServices.includes(service.id))
			.reduce((acumulador, servei) => acumulador + servei.price, 0);

		const webSelected = selectedServices.includes(WEB_SERVICE_ID);
		const extraWeb = webSelected
			? (webPagesCounter.value + webLanguagesCounter.value) * 30
			: 0;

		return baseCount + extraWeb;
	}, [
		servicesList,
		selectedServices,
		webPagesCounter.value,
		webLanguagesCounter.value,
	]);

	console.log(`totalBudget: ${totalBudget}`);
	console.log(`toggleServices: ${toggleServices}`);
	console.log(`servicesList: ${servicesList}`);
	console.log(`selectedServices: ${selectedServices}`);
	// selectedServices;
	return (
		<>
			<article>
				{servicesList.map((service) => (
					<Card
						key={service.id}
						card={service}
						controls={{
							checked: selectedServices.includes(service.id),
							onToggle: toggleServices,
						}}
						webOptionsProps={
							service.id === WEB_SERVICE_ID
								? { webPagesCounter, webLanguagesCounter }
								: undefined
						}
					/>
				))}

				<div className="total__budget">
					<span>Pressupost total: {totalBudget}€</span>
				</div>
			</article>
		</>
	);
};

export default BudgetSummary;
