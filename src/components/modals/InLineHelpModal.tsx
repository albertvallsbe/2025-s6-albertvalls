export type InlineHelpModalProps = {
	title?: string;
	message: string;
	onClose: () => void;
};

export const InLineHelpModal: React.FC<InlineHelpModalProps> = ({
	title = "Ajuda",
	message,
	onClose,
}): JSX.Element => (
	<div
		className="help-overlay"
		role="dialog"
		aria-modal="true"
		aria-labelledby="help-title"
	>
		<div className="help-modal">
			<h3 id="help-title" className="help-modal__title">
				{title}
			</h3>
			<p className="help-modal__message">{message}</p>
			<button
				type="button"
				className="help-modal__close-button"
				onClick={onClose}
				aria-label="Tancar ajuda"
			>
				×
			</button>
		</div>
	</div>
);
