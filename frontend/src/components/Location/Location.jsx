import Highlight from "../Highlight/Highlight";
import "./Location.scss";

export default function Location({ infoTitle, info, src, width, height, loadingValue }) {
    return (
        <div className="location" id="location">
            <div className='title-container'>
                <Highlight
                    className="location__title"
                    small={true}
                    tag="h2">Coordonnées</Highlight>
            </div>
            <div className="location__map">
                <iframe src={src} width={width} height={height} loading={loadingValue}></iframe>
            </div>
            <div className="location__content">
                {infoTitle.map((title, index) =>
                    <p key={index}><span>{title}</span> {info[index]}</p>
                )}
            </div>

        </div>
    )
}