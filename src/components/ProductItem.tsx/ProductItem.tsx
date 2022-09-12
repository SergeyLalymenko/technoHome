import { ReactElement } from 'react';
import { Product } from '../../pages/Home/types';
import './style.scss'

type Props = {
    product: Product
}

function ProductItem({ product }: Props): ReactElement {
    return (
        <div className='products-list__item'>
            <div>
                <img
                    className='products-list__item-picture'
                    width='220px'
                    height='220px'
                    src={product.path}
                    alt='not found'
                />
                <p
                    className='products-list__item-name'>
                    {product.name}
                </p>
            </div>
            <div>
                <p className="products-list__item-price">
                    {product.price}
                </p>
                <button className='products-list__item-btn'>
                    В корзину
                </button>
            </div>
        </div>
    );
}

export default ProductItem;
