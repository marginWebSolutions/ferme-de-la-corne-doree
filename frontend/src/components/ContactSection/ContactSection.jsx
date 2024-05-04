import ContactForm from '../ContactForm/ContactForm';
import Highlight from '../Highlight/Highlight';
import './ContactSection.scss';

export default function ContactSection() {
	return (
		<section className="ContactSection" id="Contact">
			<div className="ContactSection__form">
				<div className="title-container">
					<Highlight
						className="ContactSection__title"
						// small={true}
						tag="h2"
					>
						Contact
					</Highlight>
				</div>
				<ContactForm />
			</div>
			<div className="ContactSection__container--img">
				<img
					src="/img/christine-benton-QY_bTy8tXAA-unsplash.jpg"
					alt="description"
					width={1920}
					height={1080}
					className="contact__img"
				/>
			</div>
		</section>
	);
}
