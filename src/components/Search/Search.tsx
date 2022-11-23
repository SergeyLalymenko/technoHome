import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { TSearchProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.scss';
import './SearchResponsive.scss';

function Search({ products }: TSearchProps): ReactElement {
    const [searchValue, setSearchValue] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [isMobileSearching, setIsMobileSearching] = useState(false)

    function renderSuggestList() {
        const foundedProducts = products.filter((product) => (searchValue && product.name.toLowerCase().includes(searchValue.toLowerCase())));

        return (
            <ul className="search__suggest-list suggest-list">
                {
                    foundedProducts.length ? foundedProducts.map((product, index) => (
                        <li key={index}>
                            <Link to="">
                                {product.name}
                            </Link>
                        </li>
                    )) : (
                        <li className="suggest-list__no-result">
                            Нет результатов
                        </li>
                    )
                }
            </ul>
        )
    }


    return (
        <div className={classNames(
                "search",
                { "search--active": isMobileSearching },
                { "search--open": searchValue && isSearching },
            )}>

            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={() => setIsMobileSearching(!isMobileSearching)}
            />

            <input
                type="text"
                placeholder="Поиск"
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsSearching(true)}
                onBlur={() => setIsSearching(false)}
            />

            {isSearching && searchValue && renderSuggestList()}
        </div>)

}

export default Search;
