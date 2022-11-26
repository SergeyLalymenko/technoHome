import { ReactElement } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCategory from './ProductCategory/ProductCategory';
import { TProduct } from './types';
import samsungPhonesImg from '@assets/img/home/samsungPhones.jpg';
import samsungPhoneImg from '@assets/img/home/products/samsungPhone.jpg';
import scooterImg from '@assets/img/home/products/scooter.jpg';
import airPodsProImg from '@assets/img/home/products/airPodsPro.jpg';
import appleWatchImg from '@assets/img/home/products/appleWatch.jpg';
import acerNitroImg from '@assets/img/home/products/acerNitro.jpg';
import redmiBookImg from '@assets/img/home/products/redmiBook.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.scss';

function Home(): ReactElement {
    const populaProductsTitle: string = 'Популярные товары';
    const discountProductsTitle: string = 'Товары со скидками';

    const populaProducts: TProduct[] = [
        {
            path: scooterImg,
            name: 'Электросамокат Kugoo M5',
            price: '27 000,00 грн'
        },
        {
            path: samsungPhoneImg,
            name: 'Смартфон Samsung Galaxy A13',
            price: '8 999,00 грн'
        },
        {
            path: airPodsProImg,
            name: 'Наушники Аpple airpods pro',
            price: '2799,00 грн'
        },
        {
            path: scooterImg,
            name: 'Электросамокат Kugoo M5',
            price: '27 000,00 грн'
        },
        {
            path: samsungPhoneImg,
            name: 'Смартфон Samsung Galaxy A13',
            price: '8 999,00 грн'
        },
        {
            path: airPodsProImg,
            name: 'Наушники Аpple airpods pro',
            price: '2799,00 грн'
        }
    ]

    const discountProducts: TProduct[] = [
        {
            path: appleWatchImg,
            name: 'Смарт-часы Watch Series 6',
            price: '11 399,00 грн'
        },
        {
            path: acerNitroImg,
            name: 'Ноутбук ACER Nitro 5',
            price: '32 999,00 грн'
        },
        {
            path: redmiBookImg,
            name: 'Ноутбук Xiaomi Mi Redmi Book 14',
            price: '28 0990,00 грн'
        },
        {
            path: airPodsProImg,
            name: 'Наушники Аpple airpods pro',
            price: '2799,00 грн'
        },
        {
            path: scooterImg,
            name: 'Электросамокат Kugoo M5',
            price: '27 000,00 грн'
        },
        {
            path: appleWatchImg,
            name: 'Смарт-часы Watch Series 6',
            price: '11 399,00 грн'
        },
        {
            path: acerNitroImg,
            name: 'Ноутбук ACER Nitro 5',
            price: '32 999,00 грн'
        }
    ]

    return (
        <main className="home">
            <section className="home__phones-swiper phones-swiper">
                <div className="wrapper">
                    <Swiper
                        className="phones-swiper__body"
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}>
                        <SwiperSlide>
                            <img
                                className="phones-swiper__slide"
                                width="1140"
                                height="765"
                                src={samsungPhonesImg}
                                alt="slider"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className="phones-swiper__slide"
                                width="1140"
                                height="765"
                                src={samsungPhonesImg}
                                alt="slider"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className="phones-swiper__slide"
                                width="1140"
                                height="765"
                                src={samsungPhonesImg}
                                alt="slider"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className="phones-swiper__slide"
                                width="1140"
                                height="765"
                                src={samsungPhonesImg}
                                alt="slider"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className="phones-swiper__slide"
                                width="1140"
                                height="765"
                                src={samsungPhonesImg}
                                alt="slider"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className="phones-swiper__slide"
                                width="1140"
                                height="765"
                                src={samsungPhonesImg}
                                alt="slider"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            
            <ProductCategory title={populaProductsTitle} products={populaProducts} />

            <ProductCategory title={discountProductsTitle} products={discountProducts} />
        </main>
    );
}

export default Home;
