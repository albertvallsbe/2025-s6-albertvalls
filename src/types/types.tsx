export type TutorialStep = {
	title: string;
	description: string;
	bgColor?: string;
	// image?: string;
};

export type NavigationControls = {
	stepIndex: number;
	currentStep: TutorialStep;
	totalSteps: number;
	isFirst: boolean;
	isLast: boolean;
	next: () => void;
	prev: () => void;
	goTo: (index: number) => void;
	direction: 'next' | 'prev';
};

export type CardProps = {
	card: TutorialStep;
	controls: NavigationControls;
};

export type ImageProps = {
	refreshKey: number;
};
