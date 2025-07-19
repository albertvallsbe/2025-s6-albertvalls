import type { UseCounterOptions } from "../types/types";
import { renderHook, act } from "@testing-library/react";
import { useOptionsCounter } from "./useOptionsCounter";

describe("useOptionsCounter", () => {
	test("initializes value and flags correctly", () => {
		const options: UseCounterOptions = {
			initialValue: 5,
			minimumValue: 2,
			maximumValue: 10,
		};
		const { result } = renderHook(() => useOptionsCounter(options));

		expect(result.current.value).toBe(5);
		expect(result.current.canDecrement).toBe(true);
		expect(result.current.canIncrement).toBe(true);
	});

	test("does not decrement below minimum", () => {
		const options: UseCounterOptions = {
			initialValue: 2,
			minimumValue: 2,
			maximumValue: 5,
		};
		const { result } = renderHook(() => useOptionsCounter(options));

		act(() => {
			result.current.decrement();
		});

		expect(result.current.value).toBe(2);
		expect(result.current.canDecrement).toBe(false);
	});

	test("increments and decrements within limits", () => {
		const options: UseCounterOptions = {
			initialValue: 3,
			minimumValue: 1,
			maximumValue: 3,
		};
		const { result } = renderHook(() => useOptionsCounter(options));

		act(() => {
			result.current.decrement();
		});
		expect(result.current.value).toBe(2);
		expect(result.current.canDecrement).toBe(true);

		act(() => {
			result.current.increment();
			result.current.increment();
		});
		expect(result.current.value).toBe(3);
		expect(result.current.canIncrement).toBe(false);
	});

	test("supports unlimited increments when maximumValue is undefined", () => {
		const options: UseCounterOptions = {
			initialValue: 1,
			minimumValue: 1,
		};
		const { result } = renderHook(() => useOptionsCounter(options));

		expect(result.current.canIncrement).toBe(true);

		act(() => {
			result.current.increment();
			result.current.increment();
			result.current.increment();
		});

		expect(result.current.value).toBe(4);
		expect(result.current.canIncrement).toBe(true);
	});
});
