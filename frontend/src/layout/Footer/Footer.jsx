import Location from '../../components/Location/Location';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

export default function Footer() {
	return (
		<footer className="footer">
			<div>
				<Location
					infoTitle={[
						<FontAwesomeIcon
							icon={faLocationDot}
							aria-hidden={false}
							title="adresse"
						/>,
						<FontAwesomeIcon
							icon={faPhone}
							aria-hidden={false}
							title="téléphone"
						/>,
						<FontAwesomeIcon
							icon={faFacebook}
							aria-hidden={false}
							title="facebook"
						/>,
						<FontAwesomeIcon
							icon={faFacebook}
							aria-hidden={false}
							title="facebook"
						/>
					]}
					info={[
						'1105 Route de Vergelas, 42740 Saint-Paul-en-Jarez',
						'+33 (0)6 22 14 73 80',
						'La Ferme de la corne dorée',
						'Julie Prat - Equitation western, enseignement et travail du cheval',
					]}
					href={[
						'https://www.google.com/maps/place/Ferme+de+la+corne+dor%C3%A9e/@45.476325,4.592757,14z/data=!4m6!3m5!1s0x47f5038e17cd38e7:0x490cd7313b6076f7!8m2!3d45.476325!4d4.592757!16s%2Fg%2F11kj_svp5z?hl=fr&entry=ttu',
						'tel:+33622147380',
						'https://www.facebook.com/profile.php?id=100067318896608&locale=ms_MY',
						'https://www.facebook.com/profile.php?id=100057409511291&locale=ms_MY',
					]}
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.6760782316187!2d4.590182076756913!3d45.476328732628744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5038e17cd38e7%3A0x490cd7313b6076f7!2sFerme%20de%20la%20corne%20dor%C3%A9e!5e0!3m2!1sfr!2sfr!4v1712927707619!5m2!1sfr!2sfr"
					width="490"
					height="450"
					loadingValue="lazy"
				/>
			</div>
			<div className="footer__content">
				Site réalisé par{' '}
				<div className="margin-logo">
					<span className="margin-logo--M">m</span>
					<span className="margin-logo--A">a</span>RGIN
				</div>{' '}
				Web Solutions
			</div>
		</footer>
	);
}
