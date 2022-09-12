import { ReactElement } from 'react';
import { Product } from '../../../pages/Home/types';
import ProductItem from '../../ProductItem.tsx/ProductItem';

type Props = {
    heading: String,
    products: Product[]
}

function Products({ heading, products }: Props): ReactElement {
    return (
        <section>
            <h2 className='products-list__heading'>
                {heading}
            </h2>
            <div className='products-list'>
                {products.map((product) => (
                    <ProductItem product={product} />
                ))}
            </div>
        </section>
    );
}

export default Products;