import { ReactElement } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Products from './Products/Products';
import samsungPhonesImg from '../../assets/img/home/samsungPhones.jpg';
import samsungPhoneImg from '../../assets/img/home/products/samsungPhone.jpg';
import scooterImg from '../../assets/img/home/products/scooter.jpg'
import airPodsProImg from '../../assets/img/home/products/airPodsPro.jpg';
import { Product } from './types';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.scss';

function Home(): ReactElement {
    const populaProductsTitle: string = 'Популярные товары';
    const populaProducts: Product[] = [
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

    return (
        <main className="home">
            <section className='home__phones-swiper phones-swiper wrapper'>
                <Swiper
                    className="phones-swiper"
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                    <SwiperSlide>
                        <img
                            className="phones-swiper__slide-picture"
                            width="1140"
                            height="765"
                            src={samsungPhonesImg}
                            alt="slider" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="phones-swiper__slide-picture"
                            width="1140"
                            height="765"
                            src={samsungPhonesImg}
                            alt="slider" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="phones-swiper__slide-picture"
                            width="1140"
                            height="765"
                            src={samsungPhonesImg}
                            alt="slider" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="phones-swiper__slide-picture"
                            width="1140"
                            height="765"
                            src={samsungPhonesImg}
                            alt="slider" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="phones-swiper__slide-picture"
                            width="1140"
                            height="765"
                            src={samsungPhonesImg}
                            alt="slider" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="phones-swiper__slide-picture"
                            width="1140"
                            height="765"
                            src={samsungPhonesImg}
                            alt="slider" />
                    </SwiperSlide>
                </Swiper>
            </section>
            <Products title={populaProductsTitle} products={populaProducts} />
        </main>
    );
}

export default Home;
