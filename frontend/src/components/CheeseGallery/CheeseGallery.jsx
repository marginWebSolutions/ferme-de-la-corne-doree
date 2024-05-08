import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Highlight from '../Highlight/Highlight';
import ModalCheeses from '../ModalCheeses/ModalCheeses';
import './CheeseGallery.scss';

export default function CheeseGallery() {
	const token = localStorage.getItem('token');
	const [cheeseData, setCheeseData] = useState([]);
	const [selectedCheese, setSelectedCheese] = useState(null);
	const [action, setAction] = useState(null);

	const openModal = (cheese) => {
		setSelectedCheese(cheese);
		setAction(cheese ? 'update' : 'add');
	};

	const openAddModal = () => {
		setSelectedCheese(null);
		setAction('add');
	};

	const closeModal = () => {
		setSelectedCheese(null);
		setAction(null);
	};

	const handleUpdate = async (updatedCheese) => {
		const response = await fetch(
			`http://localhost:3001/api/fromages/${updatedCheese._id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(updatedCheese),
			}
		);

		if (!response.ok) {
			throw new Error('Failed to update article');
		}

		setCheeseData(
			cheeseData.map((cheese) =>
				cheese._id === updatedCheese._id ? updatedCheese : cheese
			)
		);
	};

	const handleAdd = async (newCheese) => {
		const formData = new FormData();
		console.log(newCheese);
		formData.append('title', newCheese.title);
		formData.append('image', newCheese.imageUrl);
		formData.append('alt', newCheese.alt);
		formData.append('description', newCheese.description);
		// formData.append('cheese', JSON.stringify(newCheese));
		console.log(formData);

		const response = await fetch(`http://localhost:3001/api/fromages`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		});

		if (!response.ok) {
			throw new Error('Failed to add a cheese');
		}
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
					<FontAwesomeIcon
						icon={faPlus}
						className="add-icon"
						onClick={openAddModal}
					/>
				</div>
				<div className="CheeseGallery__Cards">
					{cheeseData.map((item) => (
						<React.Fragment key={item._id}>
							<Card
								key={item._id}
								imageUrl={item.imageUrl}
								alt={item.alt}
								title={item.title}
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
				{selectedCheese || action === 'add' ? (
					<ModalCheeses
						selectedCheese={selectedCheese}
						closeModal={closeModal}
						handleUpdate={handleUpdate}
						handleAdd={handleAdd}
						action={action}
					/>
				) : null}
			</div>
		</div>
	);
}
