/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import Field, { FIELD_TYPES } from '../FormInputs/Field/Field';
import Select from '../FormInputs/Select/Select';
import './ContactForm.scss';

export default function Form() {
	const [formData, setFormData] = useState({
		prenom: '',
		nom: '',
		email: '',
		objet: '',
		message: '',
		captcha: '',
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [clicked, setClicked] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const captcha = document.querySelector('#g-recaptcha-response').value;
		if (!captcha) {
			setErrorMessage(
				'Veuillez cocher la case "Je ne suis pas un robot" ci-dessus.'
			);
			return;
		}

		const newFormData = { ...formData, captcha: captcha };

		fetch('http://localhost:3000/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFormData),
		})
			.then((response) => response.json())
			.then((data) => {
				setIsSubmitted(true);
				setTimeout(() => {
					setIsSubmitted(false);
					setFormData({
						prenom: '',
						nom: '',
						email: '',
						objet: '',
						message: '',
						captcha: '',
					});
					setErrorMessage('');
				}, 5000);
			});
	};

	return (
		<form method="POST" className="contact__form" onSubmit={handleSubmit}>
			<div className="contact__form__inputs">
				<div className="contact__form__inputs--wrapper">
					<div>
						<Field
							label="Prénom *"
							name="prenom"
							value={formData.prenom}
							handleChange={handleChange}
							placeholder="Jane"
							required
						/>
					</div>
					<div>
						<Field
							label="Nom *"
							name="nom"
							value={formData.nom}
							handleChange={handleChange}
							placeholder="Doe"
							required
						/>
					</div>
				</div>
				<div className="contact__form__inputs--wrapper">
					<Field
						type={FIELD_TYPES.INPUT_EMAIL}
						label="Email *"
						name="email"
						value={formData.email}
						handleChange={handleChange}
						placeholder="exemple@mail.com"
						required
					/>
				</div>
				<div className="contact__form__inputs--wrapper">
					<Select
						label="Objet *"
						name="objet"
						value={formData.objet}
						handleChange={handleChange}
						placeholder="Sélectionnez un objet..."
						required
						options={['Chèvrerie', 'Centre-équestre']}
					/>
				</div>
				<div className="contact__form__inputs--wrapper">
					<Field
						type={FIELD_TYPES.TEXTAREA}
						label="Message *"
						name="message"
						value={formData.message}
						handleChange={handleChange}
						placeholder="Veuillez saisir votre message ici..."
						required
					/>
				</div>
			</div>
			<div
				className="g-recaptcha"
				data-sitekey="6Lcr9copAAAAAKd8i_zj9XWen6chTBp-mzdBsw9v"
			></div>
			<div
				className={`message ${errorMessage ? 'errorMessage' : ''} ${
					isSubmitted ? 'confirmMessage' : ''
				}`}
			>
				{errorMessage || (isSubmitted && 'Merci pour votre message !')}
			</div>
			<button
				type="submit"
				className={`contact__form__btn ${clicked ? 'clicked' : ''}`}
				onClick={() => setClicked(true)}
				onAnimationEnd={() => setClicked(false)}
			>
				Envoyer
			</button>
		</form>
	);
}
