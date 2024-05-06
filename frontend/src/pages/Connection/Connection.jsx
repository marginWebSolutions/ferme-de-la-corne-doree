import { useState } from 'react';
import Field, { FIELD_TYPES } from '../../components/FormInputs/Field/Field';
import './Connection.scss';

export default function Connection() {
    document.title = "Ferme de la corne dorée - Connexion"

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const captchaElement = document.querySelector('#g-recaptcha-response');
        if (captchaElement && !captchaElement.value) {
            setErrorMessage(
                'Veuillez cocher la case "Je ne suis pas un robot" ci-dessus.'
            );
            return;
        } else {
            setErrorMessage('');
        }
        const newFormData = { ...formData };
        if (captchaElement && captchaElement.value) {
            newFormData.captcha = captchaElement.value;
        }

        fetch('http://localhost:3001/api/captcha', {
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
                        email: '',
                        password: '',
                    });
                    setErrorMessage('');
                }, 5000);
            });
    };

    return (
        <section className="connection">
            <form method='POST' className='connection__form' onSubmit={handleSubmit}>
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
                            placeholder="Veuillez saisir un mot de passe"
                            required
                        />
                    </div>
                    <label htmlFor="g-recaptcha-response" className="visually-hidden">
                        Je ne suis pas un robot
                    </label>
                    <div
                        className="g-recaptcha"
                        data-sitekey="6Lcr9copAAAAAKd8i_zj9XWen6chTBp-mzdBsw9v"
                        id="g-recaptcha-response"
                    ></div>
                    <div
                        className={`message ${errorMessage ? 'errorMessage' : ''} ${isSubmitted ? 'confirmMessage' : ''
                            }`}
                    >
                        {errorMessage}
                        {isSubmitted && 'Merci pour votre message !'}
                    </div>
                    <button type="submit" className='connection__form__btn'>
                        Connexion
                    </button>
                </div>
            </form>
        </section>
    )
};