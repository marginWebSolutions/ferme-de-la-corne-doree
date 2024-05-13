import TextAndImage from '../../components/TextAndImage/TextAndImage';
import Slideshow from '../../components/Slideshow/Slideshow';
import Landing from '../../components/Landing/Landing';
import centreEquestreSlideshow from '../../datas/slideshow.json';

export default function CentreEquestre() {
	document.title = 'Ferme de la corne dorée - Centre-Equestre';

	const slideshow = centreEquestreSlideshow.centreEquestreSlideshow;

	return (
		<div className="home">

			<Landing
				title="Ferme de la corne Dorée"
				src="./img/soledad-lorieto-FPGuvs1dso0-unsplash.jpg"
				texts={[
					'Cours Tous Niveaux',
					'Ranch Trail',
					'Mountain Trail',
					'Travail de Bétail',
				]}
				alt="Jument et son poulain"
				width="1920"
				height="1080"
			/>

			<TextAndImage
				sectionClass="textandimage"
				title="Le Centre Equestre"
				text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dignissimos culpa quisquam corrupti voluptatibus aut tempore recusandae quas beatae sequi iure, odit officiis facere saepe ipsam ratione ut voluptas soluta.
                Exercitationem aspernatur aliquid distinctio sunt officiis architecto, voluptatum fugiat eius pariatur saepe soluta dolore asperiores fugit veniam cupiditate rerum culpa numquam inventore harum adipisci, facere minima quam. Quos, excepturi mollitia.
                Quod, consequatur natus nemo veniam explicabo quae dolorum cum ab autem ea ad quidem fugit! Aliquam neque tempore voluptates similique accusamus corrupti, ut voluptatibus officia quod expedita. Consequatur, quia sint?"
				src="./img/eberhard-grossgasteiger-38_XHFO6ycI-unsplash.jpg"
				alt="photo de chevaux couché de soleil à la ferme de la corne dorée"
			/>

			<Slideshow array={slideshow} />


			<TextAndImage
				sectionClass="textandimage"
				reverse={true}
				title="Approche Pedagogique"
				text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dignissimos culpa quisquam corrupti voluptatibus aut tempore recusandae quas beatae sequi iure, odit officiis facere saepe ipsam ratione ut voluptas soluta.
                Exercitationem aspernatur aliquid distinctio sunt officiis architecto, voluptatum fugiat eius pariatur saepe soluta dolore asperiores fugit veniam cupiditate rerum culpa numquam inventore harum adipisci, facere minima quam. Quos, excepturi mollitia.
                Quod, consequatur natus nemo veniam explicabo quae dolorum cum ab autem ea ad quidem fugit! Aliquam neque tempore voluptates similique accusamus corrupti, ut voluptatibus officia quod expedita. Consequatur, quia sint?"
				src="./img/christine-benton-2dz2-jcfuZY-unsplash.jpg"
				alt="Cavalière Western compétition"
			/>
		</div>
	);
}
