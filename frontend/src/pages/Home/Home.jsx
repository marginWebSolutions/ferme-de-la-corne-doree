import TextAndImage from "../../components/TextAndImage/TextAndImage";
import Slideshow from "../../components/Slideshow/Slideshow";
import ImageLinks from "../../components/ImagesLinks/ImageLinks";
import homeSlideshow from "../../datas/slideshow.json";

export default function Home() {

    document.title = "Ferme de la corne dorée"

    const slideshow = homeSlideshow.homeSlideshow;

    return (
        <>

            <Slideshow
                array={slideshow}
            />

            <TextAndImage
                sectionClass="textandimage"
                title="Qui sommes nous ?"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dignissimos culpa quisquam corrupti voluptatibus aut tempore recusandae quas beatae sequi iure, odit officiis facere saepe ipsam ratione ut voluptas soluta.
                Exercitationem aspernatur aliquid distinctio sunt officiis architecto, voluptatum fugiat eius pariatur saepe soluta dolore asperiores fugit veniam cupiditate rerum culpa numquam inventore harum adipisci, facere minima quam. Quos, excepturi mollitia.
                Quod, consequatur natus nemo veniam explicabo quae dolorum cum ab autem ea ad quidem fugit! Aliquam neque tempore voluptates similique accusamus corrupti, ut voluptatibus officia quod expedita. Consequatur, quia sint?"
                src="./img/illustration_ferme_de_la_corne_doree.jpg"
                alt="photo de chèvre couché de soleil à la ferme de la corne dorée"
            />

            <ImageLinks
                sectionClass="imagelinks"
                wave={true}
                titles={["Chèvrerie", "Centre-Equestre"]}
                links={["/chevrerie", "/centre-equestre"]}
                src={["./img/antonio-janeski-RyFWaB-N2RA-unsplash.jpg", "./img/taylor-brandon-3HmP1kOdACU-unsplash.jpg"]}
                alt={["photo 1", "photo 2"]}
            />
        </>
    )
};
