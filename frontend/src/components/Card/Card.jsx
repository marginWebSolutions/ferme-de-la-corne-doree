import './Card.scss';

export default function Card({
	imageUrl,
	alt,
	title,
	description,
	width,
	height,
	loading,
	modifyIcon,
}) {
	const token = localStorage.getItem('token');

	return (
		<figure className="card">
			<img
				src={imageUrl}
				alt={alt}
				width={width}
				height={height}
				loading={loading}
			/>
			<div className="card__description">
				<figcaption>{title}</figcaption>
				{description}
			</div>
			{token && <div className="card__icon">{modifyIcon}</div>}
		</figure>
	);
}
