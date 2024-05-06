import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Highlight from '../Highlight/Highlight';
import './CheeseGallery.scss';

export default function CheeseGallery() {
	const [cheeseData, setCheeseData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/api/fromages')
			.then((response) => response.json())
			.then((data) => setCheeseData(data));
	}, []);

	return (
		<div className="CheeseGallery waveBg">
			<div className="CheeseGallery__container">
				<div className="CheeseGallery__title title-container">
					<Highlight tag="h2">Nos Fromages</Highlight>
					<FontAwesomeIcon icon={faPen} className="title-icon" />
				</div>
				<div className="CheeseGallery__Cards">
					{cheeseData.map((item) => (
						<Card
							key={item._id}
							src={item.src}
							alt={item.alt}
							caption={item.caption}
							description={item.description}
							width={372}
							height={304}
							loading="lazy"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
