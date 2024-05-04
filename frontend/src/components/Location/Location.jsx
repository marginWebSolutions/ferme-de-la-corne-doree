import { Link } from 'react-router-dom';
import Highlight from '../Highlight/Highlight';
import './Location.scss';

export default function Location({
	infoTitle,
	info,
	src,
	width,
	height,
	loadingValue,
	href, 
}) {
	return (
		<div className="location" id="Coordonnees">

			<div className='location__wrapper'>
				<div className="location__map">
					<iframe
						src={src}
						width={width}
						height={height}
						loading={loadingValue}
						title="Plan autour de la Ferme de la corne dorée"
					></iframe>
				</div>
				<div className="location__content">
					<div className="location__content__wrapper title-container">
						<Highlight className="location__title"
							tag="h2">
							Coordonnées
						</Highlight>
					</div>
					{infoTitle.map((title, index) => (
						<a key={index} href={href[index]} target='_blank'>
							<span>{title}</span> {info[index]}
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
