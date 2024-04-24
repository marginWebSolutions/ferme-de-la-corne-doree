import { Link } from "react-router-dom";
import "./Error.scss";

export default function Error() {
    document.title = "Ferme de la corne dorée - Page not Found"

    return (
            <section className="error">
                <img src={process.env.PUBLIC_URL + '/img/404_error.jpg'} alt="404 error" className="error__img"/>
                <p>Oups cette page n'existe pas</p>
                <p><Link to="/" className="error__link">Retour à l'accueil</Link></p>
            </section>
    )
};