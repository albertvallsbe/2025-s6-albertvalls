import { useState, useMemo } from "react";
import type { ItemCard } from "./types/types";
import dataCards from "./data/dataCards.json";
import { Card } from "./components/Card";
import { useOptionsCounter } from "./hooks/useOptionsCounter";
// import { useNavigation } from "./hooks/useNavigation";

const WEB_SERVICE_ID = 3;

const App = (): JSX.Element => {
	const servicesList: ItemCard[] = dataCards;

	// const {
	// 	value: webPages,
	// 	increment: incrementPages,
	// 	decrement: decrementPages,
	// 	canIncrement: canIncrementPages,
	// 	canDecrement: canDecrementPages,
	// } = useOptionsCounter({ initialValue: 1, minimumValue: 1 });

	// const {
	// 	value: webLanguages,
	// 	increment: incrementLanguages,
	// 	decrement: decrementLanguages,
	// 	canIncrement: canIncrementLanguages,
	// 	canDecrement: canDecrementLanguages,
	// } = useOptionsCounter({ initialValue: 1, minimumValue: 1 });

	const webPagesCounter = useOptionsCounter({
		initialValue: 1,
		minimumValue: 1,
	});
	const webLanguagesCounter = useOptionsCounter({
		initialValue: 1,
		minimumValue: 1,
	});

	const [selectedServices, setSelectedServices] = useState<number[]>([]);
	// const [webPages, setWebPages] = useState<number>(1);
	// const [webLanguages, setWebLanguages] = useState<number>(1);

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

	return (
		<>
			<div>
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

						// webOptionsProps={{
						// 	webPages: webPages,
						// 	webLanguages: webLanguages,
						// 	onIncrementPages: incrementPages,
						// 	onDecrementPages: decrementPages,
						// 	onIncrementLanguages: incrementLanguages,
						// 	onDecrementLanguages: decrementLanguages,
						// }}
					/>
				))}

				<div className="total__budget">
					<span>Pressupost total: {totalBudget}€</span>
				</div>
			</div>
		</>
	);
};

export default App;
