import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Field, { FIELD_TYPES } from '../../components/FormInputs/Field/Field';
import './Connection.scss';

export default function Connection() {
	document.title = 'Ferme de la corne dorée - Connexion';

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [isConnected, setIsConnected] = useState(false);

	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch('http://localhost:3001/api/auth/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				setIsSubmitted(true);
				setIsConnected(true);
				setTimeout(() => {
					setIsSubmitted(false);
					setFormData({
						email: '',
						password: '',
					});
					setErrorMessage('');
				}, 5000);
			});
	};

	useEffect(() => {
		if (isConnected) {
			navigate('/');
		}
	}, [isConnected, navigate]);

	return (
		<section className="connection">
			<form
				method="POST"
				className="connection__form"
				onSubmit={handleSubmit}
			>
				<div className="connection__form__inputs">
					<div className="connection__form__inputs--wrapper">
						<Field
							type={FIELD_TYPES.INPUT_EMAIL}
							label="Identifiant"
							name="email"
							value={formData.email}
							handleChange={handleChange}
							placeholder="Veuillez saisir votre identifiant"
							required
						/>
					</div>
					<div className="connection__form__inputs--wrapper">
						<Field
							type={FIELD_TYPES.INPUT_PASSWORD}
							label="Mot de Passe"
							name="password"
							value={formData.password}
							handleChange={handleChange}
							placeholder="Veuillez saisir votre mot de passe"
							required
						/>
					</div>
					<div
						className={`message ${
							errorMessage ? 'errorMessage' : ''
						}`}
					>
						{errorMessage}
					</div>
					<button type="submit" className="connection__form__btn">
						Connexion
					</button>
				</div>
			</form>
		</section>
	);
}
