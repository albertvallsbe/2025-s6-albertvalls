import { useState, useCallback, useMemo } from "react";
import type { UseCounterOptions, UseCounterResult } from "../types/types";

export const useOptionsCounter = ({
	initialValue,
	minimumValue,
	maximumValue,
}: UseCounterOptions): UseCounterResult => {
	const [value, setValue] = useState<number>(initialValue);

	const canDecrement = useMemo(
		() => value > minimumValue,
		[value, minimumValue]
	);
	const canIncrement = useMemo(
		() => maximumValue === undefined || value < maximumValue,
		[value, maximumValue]
	);

	const increment = useCallback(() => {
		setValue((current) => {
			const next = current + 1;
			if (maximumValue !== undefined && next > maximumValue) return current;
			return next;
		});
	}, [maximumValue]);

	const decrement = useCallback(() => {
		setValue((current) => {
			const next = current - 1;
			if (next < minimumValue) return current;
			return next;
		});
	}, [minimumValue]);

	return { value, increment, decrement, canIncrement, canDecrement };
};
