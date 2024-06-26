import Highlight from '../Highlight/Highlight';
import './TextAndImage.scss';

export default function TextAndImage({
	sectionClass,
	title,
	text,
	src,
	alt,
	reverse,
}) {
	const reverseSection = `${
		reverse ? `${sectionClass}__container--reverse` : `${sectionClass}__container`
	}`;
	const alignEndTitle = `${sectionClass}__title ${
		reverse ? `${sectionClass}__title--align-end` : ''
	}`;

	return (
		<section className={`${sectionClass}${reverse ? '--reverse': ''}`}>
			<div className={`${reverseSection}`}>
				<div className={`${sectionClass}__content`}>
					<div className={`${alignEndTitle} title-container`}>
						<Highlight tag="h2">{title}</Highlight>
					</div>
					<p className={`${sectionClass}__text`}>{text}</p>
				</div>
				<div className={`${sectionClass}__wrapper`}>
					<img
						className={`${sectionClass}__illustration`}
						src={src}
						alt={alt}
						width={400}
						height={400}
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}
