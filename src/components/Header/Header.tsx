import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../enums/routes';
import Search from '../Search/Search';
import logoImg from '../../assets/img/header/logo.svg';
import catalogImg from '../../assets/img/header/catalog.svg';
import noAvatarImg from '../../assets/img/header/noAvatar.svg';
import basketImg from '../../assets/img/header/basket.svg';
import './Header.scss';

function Header(): ReactElement {
    const populaProducts = [
        {
            name: 'Электросамокат Kugoo M5',
            price: '27 000,00 грн'
        },
        {
            name: 'Смартфон Samsung Galaxy A13',
            price: '8 999,00 грн'
        },
        {
            name: 'Наушники Аpple airpods pro',
            price: '2799,00 грн'
        },
        {
            name: 'Электросамокат Kugoo M5',
            price: '27 000,00 грн'
        },
        {
            name: 'Смартфон Samsung Galaxy A13',
            price: '8 999,00 грн'
        },
        {
            name: 'Наушники Аpple airpods pro',
            price: '2799,00 грн'
        }
    ]

    return (
        <header className="header">
            <div className="header__wrapper wrapper">
                <Link to={routes.HOME} className="header__logo">
                    <img src={logoImg}
                        width="70"
                        height="50"
                        alt="logo"
                    />
                </Link>

                <div className="header__catalog">
                    <img src={catalogImg}
                        width="24"
                        height="24"
                        alt="catalog"
                    />

                    <p>
                        Каталог
                    </p>
                </div>

                <div className="header__search">
                   <Search products={populaProducts}/>
                </div>

                <img className="header__avatar"
                    src={noAvatarImg}
                    width="40"
                    height="40"
                    alt="avatar"
                />

                <div className="header__basket">
                    <img src={basketImg}
                        width="40"
                        height="40"
                        alt="basket"
                    />

                    <div className="header__basket-amount">
                        <p>
                            2
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
