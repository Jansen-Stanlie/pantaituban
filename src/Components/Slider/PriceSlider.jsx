import React, { useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Price from '../Price/Price';


const PriceSlider = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0); // Track active slide

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={`slick-arrow-left slick-arrow${currentSlide === 0 ? ' slick-disabled' : ''}`}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="fa-solid:angle-left" />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={`slick-arrow-right slick-arrow${currentSlide === slideCount - 1 ? ' slick-disabled' : ''}`}
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="fa-solid:angle-right" />
    </div>
  );
  const settings = {
    dots: true, // Show dots by default for better navigation
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, // Scroll one slide at a time for smoother experience
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200, // Larger breakpoint for better visual flow
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, // Standard tablet breakpoint
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    beforeChange: (current, next) => setActiveSlide(next) // Update active slide
  };
  return (
    <section id="pricing">
      <div className="st-height-b180 st-height-lg-b50"></div>
      <SectionHeading title="Petualangan Tak Terbatas, Harga Terjangkau"
        subTitle="Temukan beragam aktivitas seru yang akan membuat liburan Anda di Pantai Tuban semakin berkesan.<br>Lihat daftar harga dan rencanakan petualangan Anda hari ini!" />
      <div className="container">
        <Slider {...settings} className='st-slider-style2 st-pricing-wrap'>
          {
            data.map((elements, index) => (
              <Price {...elements} key={index} />
            ))
          }
        </Slider>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  )
}

export default PriceSlider;

