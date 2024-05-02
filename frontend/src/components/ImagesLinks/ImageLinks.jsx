import Highlight from '../Highlight/Highlight';
import './ImageLinks.scss';

export default function ImageLinks({ sectionClass, titles, links, src, alt }) {
	return (
		<section className={sectionClass}>
			<div className={`${sectionClass}__container`}>
				<div className={`${sectionClass}__title title-container`}>
					<Highlight tag="h2">Découvrez nos Deux Activités</Highlight>
				</div>
				<div className={`${sectionClass}__content`}>
					{titles.map((title, index) => (
						<a
							className={`${sectionClass}__link`}
							key={index}
							href={links[index]}
						>
							<div
								className={`${sectionClass}__link--overlay`}
							></div>
							<h3 className={`${sectionClass}__link__title`}>
								{title}
							</h3>
							<img
								className={`${sectionClass}__image`}
								src={src[index]}
								alt={alt[index]}
								width={768}
								height={350}
								loading="lazy"
							/>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
