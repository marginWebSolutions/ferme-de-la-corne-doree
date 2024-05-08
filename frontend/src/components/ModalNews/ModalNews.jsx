import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './ModalNews.scss';

export default function ModalNews({
	closeModal,
	selectedArticle,
	handleUpdate,
}) {
	const [updatedItem, setUpdatedItem] = useState(selectedArticle);

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

	if (!selectedArticle) return null;

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
								<div className="modal__content__formContainer--inputControl">
									<label htmlFor="date">Date</label>
									<input
										type="text"
										name="date"
										id="date"
										placeholder="Nouvelle date"
										onChange={handleChange}
									/>
								</div>
								<div className="modal__content__formContainer--inputControl">
									<label htmlFor="content">Contenu</label>
									<textarea
										name="content"
										id="content"
										placeholder="Nouveau contenu"
										onChange={handleChange}
									></textarea>
								</div>
								<button type="submit" className="modal__btn">
									Modifier
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
