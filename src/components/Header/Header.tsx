import { Link } from 'react-router-dom';
import { routes } from '../../enums/routes';
import logoImg from '../../assets/img/header/logo.svg';
import catalogImg from '../../assets/img/header/catalog.svg';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__wrapper wrapper">
                <Link to={routes.HOME} className="header__logo">
                    <img src={logoImg} width="70" height="50" alt="logo" />
                </Link>

                <div className="header__catalog">
                    <img src={catalogImg} width="24" height="24" alt="catalog" />

                    <p>
                        Каталог
                    </p>
                </div>
            </div>
        </header>
    );
}

export default Header;
