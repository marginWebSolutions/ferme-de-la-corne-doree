import './Card.scss';

export default function Card({ src, alt, caption, description }) {
  return (
    <figure className="card">
      <img src={src} alt={alt} />
      <div className="card__description"><figcaption>{caption}</figcaption>{description}</div>
    </figure>
  );
}