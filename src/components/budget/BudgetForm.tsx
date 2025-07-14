import { useState, useRef, useEffect, type FormEvent } from "react";
import type { BudgetFormProps } from "../../types/types";

export const BudgetForm = ({ onAddBudget }: BudgetFormProps): JSX.Element => {
	const [clientName, setClientName] = useState<string>("");
	const [clientPhone, setClientPhone] = useState<string>("");
	const [clientMail, setClientMail] = useState<string>("");

	const formRef = useRef<HTMLFormElement>(null);
	const [isFormValid, setFormValid] = useState(false);

	useEffect(() => {
		const form = formRef.current;
		if (!form) return;
		setFormValid(form.checkValidity());
	}, [clientName, clientPhone, clientMail]);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formElement = formRef.current;
		if (!formElement || !formElement.checkValidity()) {
			formElement?.reportValidity();
			return;
		}

		onAddBudget({
			clientName: clientName.trim(),
			clientMail: clientMail.trim(),
			clientPhone: clientPhone.trim(),
		});
		setClientName("");
		setClientPhone("");
		setClientMail("");
	};

	return (
		<article className="card">
			<form
				className="budget-form"
				onSubmit={handleSubmit}
				noValidate
				ref={formRef}
			>
				<div className="card__item">
					<h2 className="heading">Demanar pressupost</h2>
				</div>
				<div className="card__box">
					<span className="text text__right">Nom:</span>
					<input
						id="client-name"
						type="text"
						className="budget-form__input"
						placeholder="Nom"
						value={clientName}
						onChange={(event) => setClientName(event.currentTarget.value)}
						required
					/>
				</div>
				<div className="card__box">
					<span className="text text__right">Telèfon:</span>
					<input
						id="client-phone"
						type="tel"
						className="budget-form__input"
						placeholder="Telèfon"
						value={clientPhone}
						pattern="^[0-9]{9}$"
						onChange={(event) => setClientPhone(event.currentTarget.value)}
						required
					/>
				</div>
				<div className="card__box">
					<span className="text text__right">Email:</span>
					<input
						id="client-mail"
						type="email"
						className="budget-form__input"
						placeholder="Email"
						value={clientMail}
						onChange={(event) => setClientMail(event.currentTarget.value)}
						required
					/>
				</div>

				<button type="submit" className="button__text" disabled={!isFormValid}>
					Sol·licitar pressupost →
				</button>
			</form>
		</article>
	);
};

export default BudgetForm;
