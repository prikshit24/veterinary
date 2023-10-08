'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header/Header';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Footer from './components/Footer/Footer';

export default function Home() {

  return (
    <main>
      <Header />
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.slide} style={{ backgroundImage: `url("/heroBanner.jpg")` }}>
            <h2>Grooming</h2>
            <h1>Pets Care</h1>
            <h4>Urgent Pet Care is conveniently<br />located to provide your peT!</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide} style={{ backgroundImage: `url("/heroBanner1.jpg")` }}>
            <h2 className={styles.slider2}>Pets...</h2>
            <h1>Grooming</h1>
            <h4>Going Out Of Town But Can't Take Your<br />Pet? With Pet & Care This Personalized.</h4>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Home page services section */}
      <section className={styles.servicesSection}>
        <h2 className={`textPrimary title36`} style={{ marginBottom: 60 }}>Our <span className={`textSecondary`}>Services</span></h2>
        <div className={`row gap50`}>
          <div className={styles.serviceBlock}>
            <img src='./servicesImg/servicesImg-1.jpg' />
            <p className={`title18 mb20`} >Surgery</p>
            <p className={`title14 textcenter`}>Our veterinarians can perform orthopedic and soft tissue surgeries your pet may require.</p>
          </div>
          <div className={styles.serviceBlock}>
            <img src='./servicesImg/servicesImg-2.jpg' />
            <p className={`title18 mb20`}>24 Hour Care</p>
            <p className={`title14 textcenter`}>Our veterinarians can perform orthopedic and soft tissue surgeries your pet may require.</p>
          </div>
          <div className={styles.serviceBlock}>
            <img src='./servicesImg/servicesImg-3.jpg' />
            <p className={`title18 mb20`}>Vaccinations</p>
            <p className={`title14 textcenter`}>Our veterinarians can perform orthopedic and soft tissue surgeries your pet may require.</p>
          </div>
          <div className={styles.serviceBlock}>
            <img src='./servicesImg/servicesImg-4.jpg' />
            <p className={`title18 mb20`}>Laser Therapy</p>
            <p className={`title14 textcenter`}>Our veterinarians can perform orthopedic and soft tissue surgeries your pet may require.</p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className={styles.usSection}>
        <h2 className={`textPrimary title36`} style={{ marginBottom: 60 }}><span className={`textSecondary`}>Why </span>Us?</h2>
        <div className={`row gap50`}>
          <div className={styles.serviceBlock}>
            <img src='./whyUsImg/whyUs1.png' />
            <p className={`title18 mb10`} >In-Home Consult</p>
            <p className={`title14 textcenter`}>Synergistically lorem networks</p>
          </div>
          <div className={styles.serviceBlock}>
            <img src='./whyUsImg/whyUs2.png' />
            <p className={`title18 mb10`} >Book Service 24/7</p>
            <p className={`title14 textcenter`}>Synergistically lorem networks</p>
          </div>
          <div className={styles.serviceBlock}>
            <img src='./whyUsImg/whyUs1.png' />
            <p className={`title18 mb10`} >In-Home Consult</p>
            <p className={`title14 textcenter`}>Synergistically lorem networks</p>
          </div>
          <div className={styles.serviceBlock}>
            <img src='./whyUsImg/whyUs3.png' />
            <p className={`title18 mb10`} >Experienced, Pro Staff</p>
            <p className={`title14 textcenter`}>Synergistically lorem networks</p>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  )
}
