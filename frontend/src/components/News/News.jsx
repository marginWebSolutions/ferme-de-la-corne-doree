import Article from "../Article/Article";
import Highlight from "../Highlight/Highlight";
import "./News.scss";
import newsArray from "../../datas/news.json";

export default function News() {
    const sectionClass = "news";

    return (
        <section className={`${sectionClass}`} id="News">
            <div className={`${sectionClass}__container`}>
                <div className={`${sectionClass}__title title-container`}>
                    <Highlight tag="h2">Nos Actualités</Highlight>
                </div>
                <div className={`${sectionClass}__cards`}>
                    {newsArray.map((item, index) => (
                        <Article
                            key={index}
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
    )
}
