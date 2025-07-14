import { useState, useMemo } from "react";

export type SortMode = "date" | "import" | "alphabetical";

export interface UseSortableFilterableOptions<T> {
	items: T[];
	filterFn?: (item: T, query: string) => boolean;
	sortFns?: Partial<Record<SortMode, (a: T, b: T) => number>>;
}

export interface UseSortableFilterableResult<T> {
	processedItems: T[];
	filterQuery: string;
	setFilterQuery: (query: string) => void;
	sortMode: SortMode;
	setSortMode: (mode: SortMode) => void;
}

export function useSortableFilterableList<T>({
	items,
	filterFn,
	sortFns = {},
}: UseSortableFilterableOptions<T>): UseSortableFilterableResult<T> {
	const [filterQuery, setFilterQuery] = useState<string>("");
	const [sortMode, setSortMode] = useState<SortMode>("date");

	const processedItems = useMemo(() => {
		let result = [...items];

		if (filterFn && filterQuery) {
			const lowerQuery = filterQuery.toLowerCase();
			result = result.filter((item) => filterFn(item, lowerQuery));
		}

		if (sortMode !== "date" && sortFns[sortMode]) {
			result.sort(sortFns[sortMode]!);
		}

		return result;
	}, [items, filterQuery, sortMode, filterFn, sortFns]);

	return { processedItems, filterQuery, setFilterQuery, sortMode, setSortMode };
}
