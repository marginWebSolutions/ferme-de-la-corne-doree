import { useLocation } from 'react-router-dom';

export default function NavBar({ name, path, target, onClick }) {
    const location = useLocation();

    return (
        <li><a className={location.pathname === path ? 'current' : ''} href={path} target={target} onClick={onClick}>{name}</a></li>
    )
};
