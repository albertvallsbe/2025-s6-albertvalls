import type { CardProps, WebOptionsProps } from "../types/types";

export const WebOptions = ({
	pages,
	languages,
	onChangePages,
	onChangeLanguages,
}: WebOptionsProps): JSX.Element => {
	return (
		<div className="web-options">
			<label>
				Nombre de pàgines:
				<input
					type="number"
					min={1}
					value={pages}
					onChange={(event) => {
						onChangePages?.(Number(event.target.value));
					}}
				/>
			</label>
			<label>
				Nombre d’idiomes:
				<input
					type="number"
					min={1}
					value={languages}
					onChange={(event) => {
						onChangeLanguages?.(Number(event.target.value));
					}}
				/>
			</label>
		</div>
	);
};
