import { useEffect, useState } from "react";
import "./Slideshow.scss";

export default function Slideshow({ array }) {
  const [index, setIndex] = useState(0);
  const [animationType, setAnimationType] = useState('');

  const nextCard = () => {
    setAnimationType('slideInFromRight');
    setIndex(index < array.length - 1 ? index + 1 : 0);
  };

  const prevCard = () => {
    setAnimationType('slideInFromLeft');
    setIndex(index === 0 ? array.length - 1 : index - 1);
  };

  const handleAnimationEnd = () => {
    setAnimationType(""); // reset animation
  };

  const handleCheckbox = (radioIdx) => (
    radioIdx < index
      ? setAnimationType('slideInFromLeft')
      : radioIdx > index
        ? setAnimationType('slideInFromRight')
        : null
  );

  useEffect(() => {
    const time = setTimeout(() => {
      nextCard();
    }, 5000);
    return () => {
      clearTimeout(time);
    };
  });

  return (
    <section className="SlideCardList">
      <div className="SlideCardList__click SlideCardList__click--left" onClick={() => prevCard()}></div>
      <div className="SlideCardList__click SlideCardList__click--right" onClick={() => nextCard()}></div>
      {array.map((item, idx) => (
        <div
          key={idx}
          className={`SlideCard SlideCard${index === idx ? "" : "--hide"} SlideCard--${animationType}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {array.map((item, radioIdx) => (
            <input
              key={radioIdx}
              type="radio"
              name="radio-button"
              checked={radioIdx === index}
              onChange={() => setIndex(radioIdx)}
              onClick={() => handleCheckbox(radioIdx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};