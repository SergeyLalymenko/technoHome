import { ReactElement } from 'react';
import ProductItem from '../ProductItem.tsx/ProductItem';
import { Props } from './types';
import './style.scss';

function Products({ title, products }: Props): ReactElement {
    return (
        <section className="home__products products wrapper">
            <h2 className="products__title">
                {title}
            </h2>
            <div className="products__list">
                {products.map((product) => (
                    <ProductItem product={product} />
                ))}
            </div>
        </section>
    );
}

export default Products;
