import { useState, useRef } from "react";
import type { TutorialStep, NavigationControls } from "../types/types";

export const useNavigation = (
	steps: TutorialStep[]
): NavigationControls & { direction: "next" | "prev" } => {
	const [stepIndex, setStepIndex] = useState<number>(0);
	const prevIndexRef = useRef<number>(0);

	const totalSteps = steps.length;
	const isFirst = stepIndex === 0;
	const isLast = stepIndex === totalSteps - 1;
	const currentStep = steps[stepIndex];

	const next = (): void => {
		prevIndexRef.current = stepIndex;
		if (!isLast) setStepIndex((i) => i + 1);
	};

	const prev = (): void => {
		prevIndexRef.current = stepIndex;
		if (!isFirst) setStepIndex((i) => i - 1);
	};

	const goTo = (index: number): void => {
		if (index >= 0 && index < totalSteps) {
			prevIndexRef.current = stepIndex;
			setStepIndex(index);
		}
	};

	const direction = stepIndex > prevIndexRef.current ? "next" : "prev";

	return {
		stepIndex,
		currentStep,
		totalSteps,
		isFirst,
		isLast,
		next,
		prev,
		goTo,
		direction,
	};
};
