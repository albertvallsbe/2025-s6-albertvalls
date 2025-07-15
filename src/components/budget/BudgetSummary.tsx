import {
	forwardRef,
	useImperativeHandle,
	useState,
	useMemo,
	useEffect,
} from "react";
import type {
	ItemCard,
	BudgetServiceItem,
	SummaryData,
} from "../../types/types";
import { Card } from "../services/Card";
import { useSearchParams } from "react-router-dom";
import {
	buildBudgetQuery,
	parseBudgetQuery,
	type BudgetParams,
} from "../../utils/urlUtils";
import { useOptionsCounter } from "../../hooks/useOptionsCounter";
import dataCards from "../../data/dataCards.json";

const WEB_SERVICE_ID = 3;

export type BudgetSummaryHandle = {
	getSummaryData: () => SummaryData;
};

export const BudgetSummary = forwardRef<BudgetSummaryHandle>(
	(_, ref): JSX.Element => {
		const servicesList: ItemCard[] = dataCards;
		const [selectedServices, setSelectedServices] = useState<number[]>([]);
		// const [selectedServices, setSelectedServices] = useState<number[]>(…inicial segons initialParams…)

		const [searchParams, setSearchParams] = useSearchParams();
		const initialParams = parseBudgetQuery(searchParams.toString());

		const webPagesCounter = useOptionsCounter({
			initialValue: initialParams.pages,
			// initialValue: 1,
			minimumValue: 1,
		});
		const webLanguagesCounter = useOptionsCounter({
			initialValue: initialParams.lang,
			// initialValue: 1,
			minimumValue: 1,
		});

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

		const serviceItems = useMemo<BudgetServiceItem[]>(() => {
			return servicesList
				.filter((service) => selectedServices.includes(service.id))
				.map((service) => ({
					id: String(service.id),
					name: service.title,
					price: service.price,
				}));
		}, [servicesList, selectedServices]);

		const totalBudget = useMemo<number>(() => {
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

		const totalItems = useMemo<number>(() => {
			return selectedServices.length;
		}, [serviceItems]);

		useEffect(() => {
			const params: BudgetParams = {
				seo: selectedServices.includes(1),
				ads: selectedServices.includes(2),
				web: selectedServices.includes(3),
				pages: webPagesCounter.value,
				lang: webLanguagesCounter.value,
			};
			setSearchParams(buildBudgetQuery(params));
		}, [selectedServices, webPagesCounter.value, webLanguagesCounter.value]);

		useImperativeHandle(ref, () => ({
			getSummaryData: () => ({
				selectedServices: serviceItems,
				pages: webPagesCounter.value,
				languages: webLanguagesCounter.value,
				total: totalBudget,
				totalItems,
			}),
		}));

		// console.log(`totalBudget: ${totalBudget}`);
		// console.log(`toggleServices: ${toggleServices}`);
		// console.log(`servicesList: ${servicesList}`);
		// console.log(`selectedServices: ${selectedServices}`);
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
	}
);
