import ProductItem from "../../ProductItem.tsx/ProductItem";

function Products({heading, products}) {

    return (
       <section>
            <h2>
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