import Card from "../Card/Card";
import Highlight from "../Highlight/Highlight";
import cheeseGallery from "../../datas/cheeses.json";
import './CheeseGallery.scss';

export default function CheeseGallery() {

    return (
        <div className="CheeseGallery waveBg">
            <div className="CheeseGallery__container">
                <div className="CheeseGallery__title title-container">
                    <Highlight tag="h2">Nos Fromages de Chèvre</Highlight>
                </div>
                <div className="CheeseGallery__Cards">
                    {cheeseGallery.map((item, idx) => (
                        <Card
                            key={idx}
                            src={item.src}
                            alt={item.alt}
                            caption={item.caption}
                            description={item.description}
                        />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}