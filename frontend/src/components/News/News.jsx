import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';
import Highlight from '../Highlight/Highlight';
import ModalNews from '../ModalNews/ModalNews';
import './News.scss';

export default function News() {
	const sectionClass = 'news';
	const token = localStorage.getItem('token');
	const [newsData, setNewsData] = useState([]);
	const [selectedArticle, setSelectedArticle] = useState(null);

	const openModal = (news) => {
		setSelectedArticle(news);
	};

	const closeModal = () => {
		setSelectedArticle(null);
	};

	const handleUpdate = async (updatedArticle) => {
		const response = await fetch(
			`http://localhost:3001/api/actualites/${updatedArticle._id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(updatedArticle),
			}
		);

		if (!response.ok) {
			throw new Error('Failed to update article');
		}

		setNewsData(
			newsData.map((article) =>
				article._id === updatedArticle._id ? updatedArticle : article
			)
		);
	};

	useEffect(() => {
		fetch('http://localhost:3001/api/actualites')
			.then((response) => response.json())
			.then((data) => setNewsData(data));
	}, []);

	return (
		<section className={`${sectionClass}`} id="News">
			<div className={`${sectionClass}__container`}>
				<div className={`${sectionClass}__title title-container`}>
					<Highlight tag="h2">Nos Actualités</Highlight>
				</div>
				<div className={`${sectionClass}__cards`}>
					{newsData.map((news, index) => (
						<React.Fragment key={news._id}>
							<Article
								key={news._id}
								sectionClass={sectionClass}
								title={news.title}
								date={news.date}
								text={news.content}
								index={index}
								modifyIcon={
									<FontAwesomeIcon
										icon={faPen}
										className="title-icon"
										onClick={() => openModal(news)}
									/>
								}
							/>
						</React.Fragment>
					))}
				</div>
				{selectedArticle && (
					<ModalNews
						selectedArticle={selectedArticle}
						closeModal={closeModal}
						handleUpdate={handleUpdate}
					/>
				)}
			</div>
		</section>
	);
}
