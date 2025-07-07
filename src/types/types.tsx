export type ItemCard = {
	id: number;
	title: string;
	description: string;
	price: number;
};

export type NavigationControls = {
	checked: boolean;
	onToggle: (id: number, checked: boolean) => void;
};

export type WebOptionsProps = {
	webPages: number;
	webLanguages: number;
	onIncrementPages: () => void;
	onDecrementPages: () => void;
	onIncrementLanguages: () => void;
	onDecrementLanguages: () => void;
};

export type UseCounterOptions = {
	initialValue: number;
	minimumValue: number;
	maximumValue?: number;
};

export type UseCounterResult = {
	value: number;
	increment: () => void;
	decrement: () => void;
	canIncrement: boolean;
	canDecrement: boolean;
};

export type CardProps = {
	card: ItemCard;
	controls?: NavigationControls;
	webOptionsProps?: WebOptionsProps;
};
