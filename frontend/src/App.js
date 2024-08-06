import { Route, Routes, useLocation } from 'react-router-dom';
import BackToTop from './components/BackToTop/BackToTop';
import ContactSection from './components/ContactSection/ContactSection';
import Favicon from './helmet/Favicon';
import JSONLD from './helmet/JSONLD';
import Meta from './helmet/Meta';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import CentreEquestre from './pages/CentreEquestre/CentreEquestre';
import Chevrerie from './pages/Chevrerie/Chevrerie';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';

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
					{/* <Route path="/connexion-admin-julie" element={<Connection />}/> */}
					<Route path="*" element={<Error />} />
				</Routes>
				{/* {validPaths.includes(location.pathname) && <News />} */}
				{validPaths.includes(location.pathname) && <ContactSection />}
			</main>
			<Footer />
		</div>
	);
}

export default App;
