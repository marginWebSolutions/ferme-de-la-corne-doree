import React, { useState, useEffect } from 'react'
import Field, { FIELD_TYPES } from '../FormInputs/Field/Field';
import Select from '../FormInputs/Select/Select';
import "./ContactForm.scss";

export default function Form() {
    const captchas = [
        { question: 'Combien font 7 + 2 ? *', answer: '9' },
        { question: 'Combien font 5 + 1 ? *', answer: '6' },
        { question: 'Combien font 6 + 1 ? *', answer: '7' },
    ]
    const [formData, setFormData] = useState({ prenom: '', nom: '', email: '', objet: '', message: '', captcha: ''});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currentCaptcha, setCurrentCaptcha] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const randomCaptcha = captchas[Math.floor(Math.random() * captchas.length)];
        setCurrentCaptcha(randomCaptcha);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentCaptcha && formData.captcha !== currentCaptcha.answer) {
            setErrorMessage('Veuillez saisir une réponse correcte.')
            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
            return;
        }
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ prenom: '', nom: '', email: '', objet: '', message: '', captcha: '' });
            setErrorMessage('');
            const newRandomCaptcha = captchas[Math.floor(Math.random() * captchas.length)];
            setCurrentCaptcha(newRandomCaptcha);
        }, 5000);
    }

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
                        placeholder='Jane'
                        required
                    />
                </div>
                <div>
                    <Field
                        label="Nom *"
                        name="nom"
                        value={formData.nom}
                        handleChange={handleChange}
                        placeholder='Doe'
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
                    placeholder='exemple@mail.com'
                    required
                />
            </div>
            <div className="contact__form__inputs--wrapper">
                <Select
                    label="Objet *"
                    name="objet"
                    value={formData.objet}
                    handleChange={handleChange}
                    placeholder='Sélectionnez un objet...'
                    required
                    options={['Chèvrerie', 'Centre équestre']}
                />
            </div>
            <div className="contact__form__inputs--wrapper">
                <Field
                    type={FIELD_TYPES.TEXTAREA}
                    label="Message *"
                    name="message"
                    value={formData.message}
                    handleChange={handleChange}
                    placeholder='Veuillez saisir votre message ici...'
                    required
                />
            </div>
            <div className="contact__form__inputs--wrapper">
                <Field
                    label={currentCaptcha ? currentCaptcha.question : ''}
                    name="captcha"
                    id='captcha'
                    value={formData.captcha}
                    handleChange={handleChange}
                    placeholder='Réponse'
                    required
                />
            </div>
          </div>
          <div className={`message ${errorMessage ? 'errorMessage' : ''} ${isSubmitted ? 'confirmMessage' : ''}`}>
              {errorMessage || (isSubmitted && 'Merci pour votre message !')}
          </div>
        <button type="submit" className={`contact__form__btn ${clicked ? 'clicked' : ''}`} onClick={() => setClicked(true)} onAnimationEnd={() => setClicked(false)}>Envoyer</button>
    </form>
  )
}
