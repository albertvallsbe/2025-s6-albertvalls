import type { CardProps } from "../types/types";
import { RandomImage } from "./RandomImage";

export const Card = ({ card, controls }: CardProps): JSX.Element => {
	const {
		stepIndex,
		totalSteps,
		isFirst,
		isLast,
		next,
		prev,
		goTo,
		direction,
	} = controls;
	const dots = Array.from({ length: totalSteps }, (_, i) => i);

	return (
		<div className="card__box">
			<article key={stepIndex} className={`card slide-${direction}`}>
				<div
					className="card__image-container"
					style={{ background: card.bgColor }}
				>
					<RandomImage key={stepIndex} />
				</div>
				<div className="card__body">
					<h2 className="card__title">{card.title}</h2>
					<p className="card__text">{card.description}</p>

					<div className="card__navigation">
						{!isFirst && (
							<button
								className="card__nav-button"
								onClick={prev}
								aria-label="Previous step"
							>
								←
							</button>
						)}
						{dots.map((i) => (
							<button
								key={i}
								className="card__nav-dot"
								onClick={() => goTo(i)}
								aria-label={`Step ${i + 1}`}
							>
								{i === stepIndex ? "●" : "○"}
							</button>
						))}
						{!isLast && (
							<button
								className="card__nav-button"
								onClick={next}
								aria-label="Next step"
							>
								→
							</button>
						)}
					</div>
				</div>
			</article>
		</div>
	);
};
