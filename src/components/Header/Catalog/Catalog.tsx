import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { TCategory } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Catalog.scss';

function Catalog(): ReactElement {
    const [isOpenCatalog, setIsOpenCatalog] = useState(false);

    const categories: TCategory[] = [
        {
            title: 'Самокаты',
            path: '',
        },
        {
            title: 'Телефоны',
            path: '',
        },
        {
            title: 'Телефоны',
            path: '',
        },
        {
            title: 'Телефоны',
            path: '',
        },
        {
            title: 'Телефоны',
            path: '',
        },
        {
            title: 'Телефоны',
            path: '',
        },
    ];

    function renderCatalogList() {
        return (
            <div className="catalog__list">
                <div className="catalog__close">
                    <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => setIsOpenCatalog(!isOpenCatalog)}
                    />
                </div>

                {
                    categories.map((category, i) => (
                        <Link
                            to={category.path}
                            key={i}
                            className="catalog__product"
                        >
                            <p>
                                {category.title}
                            </p>

                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    ))
                }
            </div>
        );
    }

    return (
        <div className="catalog">
            <div
                className="catalog__btn"
                onClick={() => setIsOpenCatalog(!isOpenCatalog)}
            >
                <FontAwesomeIcon icon={faBarsStaggered} />

                <p>
                    Каталог
                </p>
            </div>

            {
                isOpenCatalog && renderCatalogList()
            }
        </div>
    );
}

export default Catalog;