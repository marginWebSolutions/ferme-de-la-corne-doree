import { Helmet } from 'react-helmet';

export default function Favicon() {

    return (
        <>
            <Helmet>
                <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/img/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/img/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/img/favicon/favicon-16x16.png" />
                <link rel="manifest" href="%PUBLIC_URL%/img/favicon/site.webmanifest" />
            </Helmet>
        </>
    );
}