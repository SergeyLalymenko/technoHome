import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import searchImg from '../../assets/img/header/search.png';
import { TSearchProps } from './types';
import './Search.scss';
import './SearchResponsive.scss';

function Search({ products }: TSearchProps): ReactElement {
    const [searchValue, setSearchValue] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [isMobileSearching, setIsMobileSearching] = useState(false)

    const isSearchingHandler = () => {
        setIsSearching(!isSearching);
    }

    const onSearch = (value: string) => {
        setSearchValue(value);
    }

    const onMobileSearch = () => {
        setIsMobileSearching(!isMobileSearching);
    }

    const foundedProducts = products.filter(product => (searchValue && product.name.toLowerCase().includes(searchValue.toLowerCase())));

    return (
        <div className={`search ${isMobileSearching && "search--mobile-active"} ${searchValue && isSearching ? 'search--active' : ""}`}>
            <img
                src={searchImg}
                width="20"
                height="20"
                alt="search"
                onClick={onMobileSearch}
            />

            <input type="text" placeholder="Поиск" onChange={(e) => onSearch(e.target.value)} onFocus={isSearchingHandler} onBlur={isSearchingHandler} />
            {(isSearching && searchValue) && (
                <ul className="search__suggest-list suggest-list">
                    {foundedProducts.length > 0 ? (foundedProducts.map((product, index) => (
                        <li key={index}>
                            <Link to="">
                                {product.name}
                            </Link>
                        </li>
                    ))) : (<li className="suggest-list__no-result">
                        Нет результатов
                    </li>)
                    }
                </ul>)}
        </div>
    )
}

export default Search;
