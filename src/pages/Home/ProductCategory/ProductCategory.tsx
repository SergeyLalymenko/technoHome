import { ReactElement } from 'react';
import ProductCard from './ProductCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Props } from './types';
import 'swiper/css';
import 'swiper/css/navigation';
import './ProductCategory.scss';

function ProductCategory({ title, products }: Props): ReactElement {
    return (
        <section className="product-category wrapper">
            <h2 className="product-category__title">
                {title}
            </h2>

            <Swiper
                className="product-category__list"
                slidesPerView={1}
                modules={[Navigation]}
                spaceBetween={45}
                navigation
                breakpoints={{
                    991: {
                        slidesPerView: 3
                    },
                    767: {
                        slidesPerView: 2
                    }
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default ProductCategory;
