import { useState, useEffect } from "react";
import "./Landing.scss";

export default function Landing({ title, texts, src, alt, width, height }) {
    const [currentText, setCurrentText] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setCurrentText((prevText) => (prevText + 1) % texts.length);
                setIsVisible(true);
            }, 1000);
        }, 7000);

        return () => clearInterval(intervalId);
    }, [texts.length]);

    return (
        <section className="landing">
                <img className="landing__image" src={src} alt={alt} width={width} height={height} />
                <div className="landing__overlay"></div>
            <div className="landing__content">
                <h1 className="landing__title">{title}</h1>
                <div className={`landing__slideText ${isVisible ? 'landing__slideText--visible' : ''}`}>
                    {texts[currentText]}
                </div>
            </div>
        </section>
    );
}