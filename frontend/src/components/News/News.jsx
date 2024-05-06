import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Article from '../Article/Article';
import Highlight from '../Highlight/Highlight';
import './News.scss';

export default function News() {
	const sectionClass = 'news';
	const [newsData, setNewsData] = useState([]);

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
					<FontAwesomeIcon icon={faPen} className="title-icon" />
				</div>
				<div className={`${sectionClass}__cards`}>
					{newsData.map((item, index) => (
						<Article
							key={item._id}
							sectionClass={sectionClass}
							title={item.title}
							date={item.date}
							text={item.content}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
