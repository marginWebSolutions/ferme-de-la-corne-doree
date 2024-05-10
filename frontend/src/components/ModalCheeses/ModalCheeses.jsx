import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './ModalCheeses.scss';

export default function ModalCheeses({
	closeModal,
	selectedCheese,
	handleUpdate,
	handleAdd,
	handleDelete,
	action,
}) {
	const [updatedItem, setUpdatedItem] = useState(selectedCheese || {});

	useEffect(() => {
		setUpdatedItem(selectedCheese || {});
	}, [selectedCheese]);

	const handleChange = (e) => {
		setUpdatedItem({
			...updatedItem,
			[e.target.name]: e.target.value,
		});
	};

	const handleFileChange = (e) => {
		setUpdatedItem({
			...updatedItem,
			imageUrl: e.target.files[0],
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (action === 'add') {
			handleAdd(updatedItem);
		} else {
			handleUpdate(updatedItem);
		}
		closeModal();
	};

	if (!selectedCheese && action !== 'add') return null;

	return (
		<>
			<div className="modal">
				<div className="modal__overlay">
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
								{action === 'add'
									? 'Ajouter un fromage'
									: 'Modifier un fromage'}
							</h2>
							<form
								className="modal__content__formContainer--form"
								onSubmit={handleSubmit}
							>
								<div className="modal__content__formContainer--inputControl">
									<label htmlFor="title">
										Nom du fromage
									</label>
									<input
										type="text"
										name="title"
										id="title"
										placeholder={
											action === 'add'
												? 'Nom du fromage'
												: 'Nouveau nom du fromage'
										}
										onChange={handleChange}
									/>
								</div>
								<div className="modal__content__formContainer--inputControl">
									<label htmlFor="image">Image</label>
									<input
										type="file"
										name="image"
										id="image"
										accept="image/jpg, image/jpeg, image/png"
										onChange={handleFileChange}
									/>
								</div>
								<div className="modal__content__formContainer--inputControl">
									<label htmlFor="alt">
										Description de l'image
									</label>
									<input
										type="text"
										name="alt"
										id="alt"
										placeholder="Description de l'image"
										onChange={handleChange}
									/>
								</div>
								<div className="modal__content__formContainer--inputControl">
									<label htmlFor="description">
										Description
									</label>
									<textarea
										name="description"
										id="description"
										placeholder={
											action === 'add'
												? 'Description du fromage'
												: 'Nouvelle description'
										}
										onChange={handleChange}
									></textarea>
								</div>
								<div className="modal__btn__wrapper">
									<button
										type="submit"
										className="modal__btn"
									>
										{action === 'add'
											? 'Ajouter'
											: 'Modifier'}
									</button>
									{action === 'add' ? null : (
										<button
											type="submit"
											className="modal__btn"
											onClick={handleDelete}
										>
											Supprimer
										</button>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
