import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
	BudgetSummary,
	type BudgetSummaryHandle,
} from "../components/budget/BudgetSummary";
import BudgetForm from "../components/budget/BudgetForm";
// import BudgetList from "../components/list/BudgetList";
import ListContainer from "../components/list/ListContainer";
import type { Budget, SummaryData } from "../types/types";
import dataBudgets from "../data/dataBudgets.json";

export const BudgetPage = (): JSX.Element => {
	const summaryRef = useRef<BudgetSummaryHandle>(null);
	const [budgets, setBudgets] = useState<Budget[]>(dataBudgets);

	const handleAddBudget = (formData: {
		clientName: string;
		clientMail: string;
		clientPhone: string;
	}) => {
		const summaryData: SummaryData | undefined =
			summaryRef.current?.getSummaryData();
		if (!summaryData) return;

		const now = new Date().toLocaleDateString("ca-ES", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		});

		const newBudget: Budget = {
			id: crypto.randomUUID(),
			clientName: formData.clientName,
			clientMail: formData.clientMail,
			clientPhone: formData.clientPhone,
			selectedServices: summaryData.selectedServices,
			pages: summaryData.pages,
			languages: summaryData.languages,
			total: summaryData.total,
			totalItems: summaryData.totalItems,
			date: now,
		};

		setBudgets((current) => [...current, newBudget]);
		console.log("New budget: ", newBudget);
	};
	console.log("Budgets: ", budgets);

	return (
		<div>
			<Link to="/">
				<button className="button__text">Tornar a benvinguda</button>
			</Link>
			<BudgetSummary ref={summaryRef} />
			<BudgetForm onAddBudget={handleAddBudget} />
			{/* <BudgetList budgets={budgets} /> */}
			<ListContainer budgets={budgets} />
		</div>
	);
};
