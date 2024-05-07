import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Highlight from '../Highlight/Highlight';
import Modal from '../Modal/Modal';
import './CheeseGallery.scss';

export default function CheeseGallery() {
	const [cheeseData, setCheeseData] = useState([]);
	const [selectedCheese, setSelectedCheese] = useState(null);

	const openModal = (cheese) => {
		setSelectedCheese(cheese);
	};

	const closeModal = () => {
		setSelectedCheese(null);
	};

	const handleUpdate = async (updatedCheese) => {
		const response = await fetch(`/api/fromages/${updatedCheese._id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedCheese),
		});

		if (!response.ok) {
			throw new Error('Failed to update article');
		}

		setCheeseData(
			cheeseData.map((cheese) =>
				cheese._id === updatedCheese._id ? updatedCheese : cheese
			)
		);
	};

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
					<FontAwesomeIcon icon={faPlus} className="add-icon" />
				</div>
				<div className="CheeseGallery__Cards">
					{cheeseData.map((item) => (
						<React.Fragment key={item._id}>
							<Card
								key={item._id}
								src={item.src}
								alt={item.alt}
								caption={item.caption}
								description={item.description}
								width={372}
								height={304}
								modifyIcon={
									<FontAwesomeIcon
										icon={faPen}
										className="title-icon"
										onClick={() => openModal(item)}
									/>
								}
								loading="lazy"
							/>
						</React.Fragment>
					))}
				</div>
				{selectedCheese && (
					<Modal
						selectedCheese={selectedCheese}
						closeModal={closeModal}
						handleUpdate={handleUpdate}
					/>
				)}
			</div>
		</div>
	);
}
