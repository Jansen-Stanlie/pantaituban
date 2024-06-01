import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Slider from 'react-slick';
import Pengurus from '../Pengurus/Pengurus';
import { Icon } from '@iconify/react';

const SpecialistsSlider = ({ data }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div {...props} className={'slick-arrow-left slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')} aria-hidden="true" aria-disabled={currentSlide === 0 ? true : false} >
      <Icon icon="fa-solid:angle-left" />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div {...props} className={'slick-arrow-right slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')} aria-hidden="true" aria-disabled={currentSlide === slideCount - 1 ? true : false} >
      <Icon icon="fa-solid:angle-right" />
    </div>
  );


  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  }
  return (
    <section id="pengurus">
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading title="Meet Pantai Tuban Team"
        subTitle=" Get to know the dedicated professionals who make Pantai Tuban a truly special destination. Our team is passionate about creating unforgettable experiences for every guest.
        <br /> <b> <i> We're more than just a team – we're a family </i> </b>
        " />
      <div className="container">
        <Slider {...settings} className='st-slider-style2'>
          {
            data.map((elements, index) => (
              <Pengurus {...elements} key={index} />
            ))
          }
        </Slider>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  )
}

export default SpecialistsSlider;
