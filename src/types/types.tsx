export type ItemCard = {
	id: number;
	title: string;
	description: string;
	price: number;
};

export type WebOptionsProps = {
	pages: number;
	languages: number;
	onChangePages: (newPages: number) => void;
	onChangeLanguages: (newLanguages: number) => void;
};

export type NavigationControls = {
	checked: boolean;
	onToggle: (id: number, checked: boolean) => void;
};

export type CardProps = {
	card: ItemCard;
	controls?: NavigationControls;
	webOptionsProps?: WebOptionsProps;
};
