import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    const handleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    }

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const leftNav = [
        { name: 'Accueil', path: '/' },
        { name: 'Chèvrerie', path: '/chevrerie' },
        { name: 'Centre-Equestre', path: '/centre-equestre' }
    ];

    const rightNav = [
        { name: 'Actualités', path: '#News' },
        { name: 'Contact & Coordonnées', path: '#Contact' },
        { name: <FontAwesomeIcon icon={faFacebook} aria-hidden={false} title='facebook' />, path: 'https://www.facebook.com/profile.php?id=100067318896608', target: '_blank'}
    ];

    const combinedNav = [...leftNav, ...rightNav];

    return (
        <header className={scrolled ? 'scrolled': ''}>
            <nav className={scrolled ? 'nav--scrolled' : ''}>
                <div className='nav--burger' onClick={handleBurgerMenu}>
                    {isBurgerMenuOpen
                        ? <FontAwesomeIcon icon={faXmark} />
                        : <FontAwesomeIcon icon={faBars} />
                    }
                </div>
                <ul className="nav__list nav__list--left">
                    {leftNav.map((item, index) => (
                        <NavBar
                            key={index}
                            name={item.name}
                            path={item.path}
                        />
                    ))}
                </ul>
                <div className={`logo ${scrolled ? 'logo--scrolled' : ''}`}>
                    <img
                        className={`logo__img ${isBurgerMenuOpen ? 'logo__img--open' : ''}`}
                        src="./img/logo_de_la_ferme_de_la_corne_doree.jpg"
                        alt="Logo de la Ferme de la Corne Dorée"
                    />
                    <h1 className={`logo__main-title ${isMobile ? '' : 'sr-only'} ${isBurgerMenuOpen ? 'logo__main-title--open' : ''}`}>Ferme de la corne dorée</h1>
                </div>
                <ul className="nav__list nav__list--right">
                    {rightNav.map((item, index) => (
                        <NavBar
                            key={index}
                            name={item.name}
                            path={item.path}
                            target={item.target}
                        />
                    ))}
                </ul>
                <div className={`nav__list__burger--container ${isBurgerMenuOpen ? 'open' : ''}`}>
                <ul className='nav__list__burger'>
                    {combinedNav.map((item, index) => (
                        <NavBar
                            key={index}
                            name={item.name}
                            path={item.path}
                            target={item.target}
                            onClick={handleBurgerMenu}
                        />
                    ))}
                </ul>
                </div>
            </nav>
        </header>
    )
};