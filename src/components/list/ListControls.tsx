import type { SortMode } from "../../hooks/useListItems";

export type ListControlsProps = {
	filterQuery: string;
	onFilterChange: (newQuery: string) => void;
	sortMode: SortMode;
	onSortChange: (mode: SortMode) => void;
};

export const ListControls: React.FC<ListControlsProps> = ({
	filterQuery,
	onFilterChange,
	sortMode,
	onSortChange,
}): JSX.Element => (
	<div className="list-controls">
		<input
			type="search"
			className="list-controls__search"
			placeholder="Cercar pressupost..."
			aria-label="Cercar pressupost"
			value={filterQuery}
			onChange={(e) => onFilterChange(e.currentTarget.value)}
		/>
		<button
			type="button"
			className="button__icon list-controls__button"
			aria-label="Ordenar alfabèticament A a Z"
			onClick={() => onSortChange("alphabetical")}
			disabled={sortMode === "alphabetical"}
		>
			A-Z
		</button>
		<button
			type="button"
			className="button__icon list-controls__button"
			aria-label="Ordenar per import"
			onClick={() => onSortChange("import")}
			disabled={sortMode === "import"}
		>
			Import
		</button>
		<button
			type="button"
			className="button__icon list-controls__button"
			aria-label="Reiniciar ordre"
			onClick={() => onSortChange("date")}
			disabled={sortMode === "date"}
		>
			Reset
		</button>
	</div>
);
export default ListControls;
