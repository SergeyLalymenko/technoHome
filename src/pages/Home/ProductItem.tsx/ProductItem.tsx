import { ReactElement } from 'react';
import { Props } from './types';
import './style.scss'

function ProductItem({ product }: Props): ReactElement {
    return (
        <div className="products-list__product product">
            <img
                className="product__picture"
                width="220"
                height="220"
                src={product.path}
                alt="not found"/>
            <p
                className="product__title">
                {product.name}
            </p>
            <p className="product__price">
                {product.price}
            </p>
            <button className="product__btn">
                В корзину
            </button>
        </div>
    );
}

export default ProductItem;
