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

	const fetchCheeseData = async () => {
		const response = await fetch('http://localhost:3001/api/fromages');
		const data = await response.json();
		setCheeseData(data);
	};

	const handleUpdate = async (updatedCheese) => {
		const formData = new FormData();
		formData.append('title', updatedCheese.title);
		if (updatedCheese.imageUrl instanceof File) {
			formData.append('image', updatedCheese.imageUrl);
		}
		formData.append('description', updatedCheese.description);

		const response = await fetch(
			`http://localhost:3001/api/fromages/${updatedCheese._id}`,
			{
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${token}`,
				},
				body: formData,
			}
		);

		if (!response.ok) {
			throw new Error('Failed to update article');
		}

		const updatedCheeseData = await response.json();

		setCheeseData(
			cheeseData.map((cheese) =>
				cheese._id === updatedCheese._id ? updatedCheeseData : cheese
			)
		);

		await fetchCheeseData();
	};

	const handleAdd = async (newCheese) => {
		const formData = new FormData();
		formData.append('title', newCheese.title);
		formData.append('image', newCheese.imageUrl);
		formData.append('description', newCheese.description);

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

		fetchCheeseData();
	};

	const handleDelete = async () => {
		const response = await fetch(
			`http://localhost:3001/api/fromages/${selectedCheese._id}`,
			{
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error('Failed to delete article');
		}

		alert('Etes-vous sûr de vouloir supprimer ce fromage ?');

		setCheeseData(
			cheeseData.filter((cheese) => cheese._id !== selectedCheese._id)
		);

		closeModal();
	};

	useEffect(() => {
		fetchCheeseData();
	}, []);

	return (
		<div className="CheeseGallery waveBg">
			<div className="CheeseGallery__container">
				<div className="CheeseGallery__title title-container">
					<Highlight tag="h2">Nos Fromages</Highlight>
					{token && (
						<FontAwesomeIcon
							icon={faPlus}
							className="add-icon"
							onClick={openAddModal}
						/>
					)}
				</div>
				<div className="CheeseGallery__Cards">
					{cheeseData
						.filter((item) => item._id)
						.map((item) => (
							<Card
								key={item._id}
								imageUrl={item.imageUrl}
								alt={`Photo de ${item.title}`}
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
						))}
				</div>
				{selectedCheese || action === 'add' ? (
					<ModalCheeses
						selectedCheese={selectedCheese}
						closeModal={closeModal}
						handleUpdate={handleUpdate}
						handleAdd={handleAdd}
						handleDelete={handleDelete}
						action={action}
					/>
				) : null}
			</div>
		</div>
	);
}
