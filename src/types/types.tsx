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

export type CardProps = {
	card: ItemCard;
	controls?: NavigationControls;
};

export type ImageProps = {
	refreshKey: number;
};
