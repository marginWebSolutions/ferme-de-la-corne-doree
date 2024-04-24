import React from 'react';
import "./ImageLinks.scss";

export default function ImageLinks({ sectionClass, wave, titles, links, src, alt }) {
  const waveSection = `${sectionClass} ${wave ? `waveBg` : ''}`;

  return (
    <section className={waveSection}>
      <div className={`${sectionClass}__container`}>
        {titles.map((title, index) => (
          <a className={`${sectionClass}__link`} key={index} href={links[index]}>
            <h3 className={`${sectionClass}__title`}>{title}</h3>
            <img className={`${sectionClass}__image`} src={src[index]} alt={alt[index]} />
          </a>
        ))}
      </div>
    </section>
  )
}
