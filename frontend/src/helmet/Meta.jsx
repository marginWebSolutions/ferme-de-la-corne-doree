import { Helmet } from 'react-helmet';

export default function Meta() {

    return (
        <>
            <Helmet>
                <meta name="description" content="La Ferme de la corne dorée est une chèvrerie située aux portes du parc naturel régional du Pilat : Vente de fromages de chèvre artisanaux et équitation Western." />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="https://www.lacornedoree.fr" />
                <meta name="twitter:title" content="Ferme de la corne dorée - Chèvrerie et Equitation Western" />
                <meta name="twitter:description" content="Découvrez la ferme de la corne dorée, production et vente de fromages de chèvre artisanaux et cours d'équitation western." />
                <meta name="twitter:image" content="./img/logo_de_la_ferme_de_la_corne_doree.jpg" />

                <meta property="og:title" content="Ferme de la corne dorée - Chèvrerie et Equitation Western" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.lacornedoree.fr" />
                <meta property="og:description" content="Découvrez la ferme de la corne dorée, production et vente de fromages de chèvre artisanaux et cours d'équitation western." />
                <meta property="og:image" content="./img/logo_de_la_ferme_de_la_corne_doree.jpg" />
                <meta property="og:site_name" content="Ferme de la corne dorée" />
            </Helmet>
        </>
    );
}