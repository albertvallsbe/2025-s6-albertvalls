import { useState, useMemo } from "react";
import type { ItemCard } from "./types/types";
import dataCards from "./data/dataCards.json";
import { Card } from "./components/Card";
// import { useNavigation } from "./hooks/useNavigation";

const App = (): JSX.Element => {
	const servicesList: ItemCard[] = dataCards;
	const [selectedServices, setSelectedServices] = useState<number[]>([]);

	const toggleServices = (idService: number, isChecked: boolean) => {
		setSelectedServices((seleccionats) => {
			if (isChecked) {
				return seleccionats.includes(idService)
					? seleccionats
					: [...seleccionats, idService];
			} else {
				return seleccionats.filter(
					(identificador) => identificador !== idService
				);
			}
		});
	};

	const totalBudget = useMemo(() => {
		return servicesList
			.filter((service) => selectedServices.includes(service.id))
			.reduce((acumulador, servei) => acumulador + servei.price, 0);
	}, [servicesList, selectedServices]);

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
					/>
				))}

				<div className="total__budget">
					<span>Pressupost total:</span> {totalBudget}€
				</div>
			</div>
		</>
	);
};

export default App;
