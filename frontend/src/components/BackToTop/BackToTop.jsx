import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useCallback } from 'react';
import './BackToTop.scss';

export default function BackToTop() {

    const [showScrollToTop, setShowScrollToTop] = useState(false);

	const checkScrollToTop = useCallback(() => {
		const offset = window.scrollY;
		if (!showScrollToTop && offset > 850) {
			setShowScrollToTop(true);
		} else if (showScrollToTop && offset <= 850) {
			setShowScrollToTop(false);
		}
	}, [showScrollToTop]);

	useEffect(() => {
		window.addEventListener('scroll', checkScrollToTop);
		return () => window.removeEventListener('scroll', checkScrollToTop);
	}, [checkScrollToTop]);

    return (
        <div
            className={`backToTop ${showScrollToTop ? 'visible' : 'hidden'
                }`}
        >
            <FontAwesomeIcon
                icon={faChevronUp}
                title="Retour en haut de la page"
                onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }
            />
        </div>
    );
}