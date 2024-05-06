import { Routes, Route, useLocation } from 'react-router-dom';
import BackToTop from './components/BackToTop/BackToTop';
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
	
	return (
		<div className="App">
			<Favicon />
			<Meta />
			<JSONLD />
			<BackToTop />
			<Header />
			<main>
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
