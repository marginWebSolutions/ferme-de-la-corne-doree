import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactForm from "../ContactForm/ContactForm";
import Location from "../Location/Location"
import Highlight from '../Highlight/Highlight';
import "./ContactSection.scss";

export default function ContactSection() {

    return (
        <section className="ContactSection" id="Contact">
            <div className="ContactSection__form">
                <div className='title-container'>
                    <Highlight 
                    className="ContactSection__title" 
                    small={true} 
                    tag="h2">Contact</Highlight>
                </div>
                <ContactForm />
            </div>

            <Location
                infoTitle={[<FontAwesomeIcon icon={faLocationDot} aria-hidden={false} title="adresse" />, <FontAwesomeIcon icon={faPhone} aria-hidden={false} title="téléphone" />]}
                info={['1105 Route de Vergelas, 42740 Saint-Paul-en-Jarez', '+33 (0)6 22 14 73 80']}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.6760782316187!2d4.590182076756913!3d45.476328732628744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5038e17cd38e7%3A0x490cd7313b6076f7!2sFerme%20de%20la%20corne%20dor%C3%A9e!5e0!3m2!1sfr!2sfr!4v1712927707619!5m2!1sfr!2sfr"
                width="490"
                height="450"
                loadingValue="lazy"
            />
        </section>
    );
}