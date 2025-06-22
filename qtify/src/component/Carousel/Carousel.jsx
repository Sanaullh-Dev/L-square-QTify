import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import styles from "./Carousel.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Carousel({ data, renderComponent }) {
  const swiperRef = useRef(null);
  const handlePrevSlide = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.swiper?.slideNext();
  };
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.swiperWrapper}>
        <LeftArrow 
          onClick={handlePrevSlide} 
          className={styles.navButton + ' ' + styles.prevButton}
        />
        
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
          className={styles.swiper}
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.id || index} className={styles.slide}>
              {renderComponent(item)}
            </SwiperSlide>
          ))}
        </Swiper>

        <RightArrow 
          onClick={handleNextSlide} 
          className={styles.navButton + ' ' + styles.nextButton}
        />
      </div>
    </div>
  );
}

export default Carousel;
