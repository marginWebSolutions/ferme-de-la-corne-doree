import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './Header.scss';

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
	const [isValidLocation, setIsValidLocation] = useState(true);
	const location = useLocation();
	const token = localStorage.getItem('token');

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 0) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	const handleValidLocation = useCallback(() => {
		const validPaths = ['/', '/chevrerie', '/centre-equestre'];

		setIsValidLocation(validPaths.includes(location.pathname));
	}, [location.pathname]);

	const handleBurgerMenu = () => {
		setIsBurgerMenuOpen(!isBurgerMenuOpen);
	};

	const handleSignOut = () => {
		localStorage.removeItem('token');
		window.location.href = '/';
	};

	useEffect(() => {
		handleValidLocation();
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleValidLocation]);

	const leftNav = [
		{ name: 'Accueil', path: '/' },
		{ name: 'Chèvrerie', path: '/chevrerie' },
		{ name: 'Centre-Equestre', path: '/centre-equestre' },
	];

	const rightNav = [
		{ name: 'Actualités', path: '#News' },
		{ name: 'Contact', path: '#Contact' },
		{ name: 'Coordonnées', path: '#Coordonnees' },
	];

	const combinedNav = [...leftNav, ...rightNav];

	return (
		<header className={scrolled ? 'scrolled' : ''}>
			<nav className={scrolled ? 'nav--scrolled' : ''}>
				<div className="nav--burger" onClick={handleBurgerMenu}>
					{isBurgerMenuOpen ? (
						<FontAwesomeIcon icon={faXmark} />
					) : (
						<FontAwesomeIcon icon={faBars} />
					)}
				</div>
				<ul className="nav__list nav__list--left">
					{leftNav.map((item, index) => (
						<NavBar key={index} name={item.name} path={item.path} />
					))}
				</ul>
				<div className={`logo ${scrolled ? 'logo--scrolled' : ''}`}>
					<img
						className={`logo__img ${
							isBurgerMenuOpen ? 'logo__img--open' : ''
						}`}
						src="./img/logo_de_la_ferme_de_la_corne_doree.jpg"
						alt="Logo de la Ferme de la Corne Dorée"
					/>
				</div>
				<ul
					className={`nav__list nav__list--right ${
						isValidLocation ? '' : 'disable'
					}`}
				>
					{rightNav.map((item, index) => (
						<NavBar key={index} name={item.name} path={item.path} />
					))}
					{token && (
						<button onClick={handleSignOut} className="logout__btn">
							Deconnexion
						</button>
					)}
				</ul>
				<div
					className={`nav__list__burger--container ${
						isBurgerMenuOpen ? 'open' : ''
					}`}
				>
					<ul className="nav__list__burger">
						{(isValidLocation ? combinedNav : leftNav).map(
							(item, index) => (
								<NavBar
									key={index}
									name={item.name}
									path={item.path}
									target={item.target}
									onClick={handleBurgerMenu}
								/>
							)
						)}
					</ul>
				</div>
			</nav>
		</header>
	);
}
