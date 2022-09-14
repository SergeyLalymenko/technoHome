import { ReactElement } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Props } from './types';
import './ProductCategory.scss';

function ProductCategory({ title, products }: Props): ReactElement {
    return (
        <section className="home__product-category product-category wrapper">
            <h2 className="product-category__title">
                {title}
            </h2>
            <div className="product-category__list">
                {products.map((product) => (
                    <ProductCard key={product.name} product={product} />
                ))}
            </div>
        </section>
    );
}

export default ProductCategory;
