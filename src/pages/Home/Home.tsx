import { Pagination  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Products from '../../components/Header/Products/Products';
import samsungPhonesImg from '../../assets/img/home/samsungPhonesImg.jpg';
import samsungPhoneImg from '../../assets/img/home/products/samsungPhoneImg.jpg';
import scooterImg from '../../assets/img/home/products/scooterImg.jpg'
import airPodsProImg from '../../assets/img/home/products/airPodsProImg.jpg';
import '../../assets/img/home/products/airPodsProImg.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.scss';

function Home() {
    const populaProducts = [
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
        <main className='wrapper'>
            <section className=''>
                <Swiper
                    className='phones-swiper'
                    modules={[ Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                        <SwiperSlide>
                            <img 
                                className='phones-swiper__slide-picture'
                                width='1140px' 
                                height='765px' 
                                src={samsungPhonesImg}
                                alt='not found'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img 
                                className='phones-swiper__slide-picture'
                                width='1140px' 
                                height='765px' 
                                src={samsungPhonesImg}
                                alt='not found'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img 
                                className='phones-swiper__slide-picture'
                                width='1140px' 
                                height='765px' 
                                src={samsungPhonesImg}
                                alt='not found'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img 
                                className='phones-swiper__slide-picture'
                                width='1140px' 
                                height='765px' 
                                src={samsungPhonesImg}
                                alt='not found'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img 
                                className='phones-swiper__slide-picture'
                                width='1140px' 
                                height='765px' 
                                src={samsungPhonesImg}
                                alt='not found'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img 
                                className='phones-swiper__slide-picture'
                                width='1140px' 
                                height='765px' 
                                src={samsungPhonesImg}
                                alt='not found'/>
                        </SwiperSlide>
                </Swiper>
            </section>
            <Products heading = 'Популярные товары' products={populaProducts}/>
        </main>
    );
}

export default Home;
