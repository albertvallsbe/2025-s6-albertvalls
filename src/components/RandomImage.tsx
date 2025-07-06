export const RandomImage = (): JSX.Element => {
	const id = Math.floor(Math.random() * 122) + 1;
	const src = `https://randomfox.ca/images/${id}.jpg`;

	return <img width={320} src={src} alt="Random fox" />;
};
