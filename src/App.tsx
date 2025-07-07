import { useState, useMemo } from "react";
import type { ItemCard } from "./types/types";
import dataCards from "./data/dataCards.json";
import { Card } from "./components/Card";
// import { useNavigation } from "./hooks/useNavigation";

const WEB_SERVICE_ID = 3;

const App = (): JSX.Element => {
	const servicesList: ItemCard[] = dataCards;

	const [selectedServices, setSelectedServices] = useState<number[]>([]);
	const [webPages, setWebPages] = useState<number>(1);
	const [webLanguages, setWebLanguages] = useState<number>(1);

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
		const extraWeb = webSelected ? (webPages + webLanguages) * 30 : 0;

		return baseCount + extraWeb;
	}, [servicesList, selectedServices, webPages, webLanguages]);

	return (
		<>
			<div>
				{servicesList.map((servei) => (
					<Card
						key={servei.id}
						card={servei}
						controls={{
							checked: selectedServices.includes(servei.id),
							onToggle: toggleServices,
						}}
						webOptionsProps={{
							pages: webPages,
							languages: webLanguages,
							onChangePages: setWebPages,
							onChangeLanguages: setWebLanguages,
						}}
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
