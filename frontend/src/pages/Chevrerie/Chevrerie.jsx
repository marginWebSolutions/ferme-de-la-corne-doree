import TextAndImage from "../../components/TextAndImage/TextAndImage";
import Slideshow from "../../components/Slideshow/Slideshow";
import CheeseGallery from "../../components/CheeseGallery/CheeseGallery";
import Landing from "../../components/Landing/Landing";

import chevrerieSlideshow from "../../datas/slideshow.json";

export default function Chevrerie() {

    document.title = "Ferme de la corne dorée - Chèvrerie"

    const slideshow = chevrerieSlideshow.chevrerieSlideshow;

    return (
        <div className="home">

            <Landing
                title="Ferme de la corne Dorée"
                src="./img/bailey-mahon-AlfgSap679Y-unsplash.jpg"
                texts={[
                    'Élevage de Chèvres Alpines',
                    'Fromages au Lait Cru',
                    'Production sur Place',
                ]}
                alt="Cavalière à la Ferme de la corne dorée, avec un coucher de soleil sur les montagnes du Pilat"
                width="1920"
                height="1080"
            />

            <TextAndImage
                sectionClass="textandimage"
                title="La Chèvrerie"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dignissimos culpa quisquam corrupti voluptatibus aut tempore recusandae quas beatae sequi iure, odit officiis facere saepe ipsam ratione ut voluptas soluta.
                Exercitationem aspernatur aliquid distinctio sunt officiis architecto, voluptatum fugiat eius pariatur saepe soluta dolore asperiores fugit veniam cupiditate rerum culpa numquam inventore harum adipisci, facere minima quam. Quos, excepturi mollitia.
                Quod, consequatur natus nemo veniam explicabo quae dolorum cum ab autem ea ad quidem fugit! Aliquam neque tempore voluptates similique accusamus corrupti, ut voluptatibus officia quod expedita. Consequatur, quia sint?"
                src="./img/nataliya-melnychuk-BjGj8x5cdSk-unsplash.jpg"
                alt="photo de chèvre couché de soleil à la ferme de la corne dorée"
            />

            <Slideshow
                array={slideshow}
            />

            <CheeseGallery />
        </div>
    )
};