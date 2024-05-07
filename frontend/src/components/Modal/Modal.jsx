import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Modal.scss';

export default function Modal({
	closeModal,
	selectedArticle,
	selectedCheese,
	handleUpdate,
}) {
	const selectedItem = selectedArticle || selectedCheese;
	const [updatedItem, setUpdatedItem] = useState(selectedItem);

	const handleChange = (e) => {
		setUpdatedItem({
			...updatedItem,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleUpdate(updatedItem);
		closeModal();
	};

	if (!selectedItem) return null;

	return (
		<>
			<div className="modal">
				<div className="modal__overlay"></div>
				<div className="modal__content">
					<div className="modal__content__closing">
						<FontAwesomeIcon
							icon={faXmark}
							onClick={closeModal}
							className="modal__content__closing--btn"
						/>
					</div>
					<div className="modal__content__formContainer">
						<h2 className="modal__content__formContainer--title">
							Modifier l'article
						</h2>
						<form
							className="modal__content__formContainer--form"
							onSubmit={handleSubmit}
						>
							<div className="modal__content__formContainer--inputControl">
								<label htmlFor="title">Titre</label>
								<input
									type="text"
									name="title"
									id="title"
									placeholder="Nouveau titre"
									onChange={handleChange}
								/>
							</div>
							{selectedItem.date && (
								<div className="modal__content__formContainer--inputControl">
									<label htmlFor="date">Date</label>
									<input
										type="text"
										name="date"
										id="date"
										value={selectedItem.date}
										onChange={handleChange}
										placeholder="Nouvelle date"
									/>
								</div>
							)}
							{selectedItem.src && (
								<div className="modal__content__formContainer--inputControl">
									<label htmlFor="image">Image</label>
									<input
										type="file"
										name="image"
										id="image"
										accept="image/png, image/jpeg"
										onChange={handleChange}
									/>
								</div>
							)}
							<div className="modal__content__formContainer--inputControl">
								<label htmlFor="content">Contenu</label>
								<textarea
									name="content"
									id="content"
									value={
										selectedItem.description ||
										selectedItem.content
									}
									onChange={handleChange}
									placeholder="Nouveau contenu"
								></textarea>
							</div>
							<button type="submit">Modifier</button>
							<button type="submit">Supprimer</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
