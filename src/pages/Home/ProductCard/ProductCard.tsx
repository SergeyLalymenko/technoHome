import { ReactElement } from 'react';
import { Props } from './types';
import './ProductCard.scss'

function ProductCard({ product }: Props): ReactElement {
    return (
        <div className="list__product-card product-card">

            <img
                className="product-card__picture"
                width="220"
                height="220"
                src={product.path}
                alt="product"/>

            <p
                className="product-card__description">
                {product.name}
            </p>

            <p className="product-card__price">
                {product.price}
            </p>

            <button className="product-card__btn">
                В корзину
            </button>
            
        </div>
    );
}

export default ProductCard;
