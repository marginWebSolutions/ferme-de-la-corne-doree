export default function Article({ sectionClass, date, text, title }) {
    return (
        <div className={`${sectionClass}__card`} >
            <div className={`${sectionClass}__content`}>
                <h3 className={`${sectionClass}__content--title`}>{title}</h3>
                <p className={`${sectionClass}__content--date`}>{date}</p>
            </div>
            <p className={`${sectionClass}__card--text`}>{text}</p>
        </div>
    );
}