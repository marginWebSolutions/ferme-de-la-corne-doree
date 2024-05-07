export default function Article({
	sectionClass,
	date,
	text,
	title,
	modifyIcon,
}) {
	const token = localStorage.getItem('token');

	return (
		<div className={`${sectionClass}__card`}>
			<div className={`${sectionClass}__content`}>
				<h3 className={`${sectionClass}__content--title`}>{title}</h3>
				<p className={`${sectionClass}__content--date`}>{date}</p>
				{token && modifyIcon}
			</div>
			<p className={`${sectionClass}__card--text`}>{text}</p>
		</div>
	);
}
