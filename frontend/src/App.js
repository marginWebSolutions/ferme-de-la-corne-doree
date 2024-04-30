import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Header from './layout/Header/Header';
import ContactSection from './components/ContactSection/ContactSection';
import News from './components/News/News';
import Footer from './layout/Footer/Footer';
import Home from './pages/Home/Home';
import Chevrerie from './pages/Chevrerie/Chevrerie';
import CentreEquestre from './pages/CentreEquestre/CentreEquestre';
import Error from './pages/Error/Error';
import Meta from './helmet/Meta';
import JSONLD from './helmet/JSONLD';
import Favicon from './helmet/Favicon';

function App() {
	const location = useLocation();
	const validPaths = ['/', '/chevrerie', '/centre-equestre'];
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
		<div className="App">
			<Favicon />
			<Meta />
			<JSONLD />
			<Header />
			<main>

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

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chevrerie" element={<Chevrerie />} />
					<Route
						path="/centre-equestre"
						element={<CentreEquestre />}
					/>
					<Route path="*" element={<Error />} />
				</Routes>
				{validPaths.includes(location.pathname) && <News />}
				{validPaths.includes(location.pathname) && <ContactSection />}
			</main>
			<Footer />
		</div>
	);
}

export default App;
