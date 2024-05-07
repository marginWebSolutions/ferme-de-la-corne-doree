import './Card.scss';

export default function Card({
	src,
	alt,
	caption,
	description,
	width,
	height,
	loading,
	modifyIcon,
}) {
	return (
		<figure className="card">
			<img
				src={src}
				alt={alt}
				width={width}
				height={height}
				loading={loading}
			/>
			<div className="card__description">
				<figcaption>{caption}</figcaption>
				{description}
			</div>
			<div className="card__icon">{modifyIcon}</div>
		</figure>
	);
}
