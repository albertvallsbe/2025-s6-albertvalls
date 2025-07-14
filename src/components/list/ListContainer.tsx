import ListControls from "./ListControls";
import ListItems from "./ListItems";
import type { Budget } from "../../types/types";
import { useSortableFilterableList } from "../../hooks/useListItems";

export type ListContainerProps = {
	budgets: Budget[];
};

export const ListContainer: React.FC<ListContainerProps> = ({
	budgets,
}: ListContainerProps): JSX.Element => {
	const { processedItems, filterQuery, setFilterQuery, sortMode, setSortMode } =
		useSortableFilterableList<Budget>({
			items: budgets,
			filterFn: (budget, query) =>
				budget.clientName.toLowerCase().includes(query),
			sortFns: {
				import: (a, b) => b.total - a.total,
				alphabetical: (a, b) => a.clientName.localeCompare(b.clientName),
				date: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
			},
		});

	return (
		<section className="list__container">
			<div className="list__header">
				{budgets.length > 0 && (
					<h2 className="heading">Pressupostos en curs:</h2>
				)}
			</div>
			<ListControls
				filterQuery={filterQuery}
				onFilterChange={setFilterQuery}
				sortMode={sortMode}
				onSortChange={setSortMode}
			/>
			<ListItems budgets={processedItems} />
		</section>
	);
};

export default ListContainer;
