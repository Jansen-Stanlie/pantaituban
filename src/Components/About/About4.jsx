import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import parser from 'html-react-parser'
import SectionHeading from '../SectionHeading/SectionHeading';
import Slider from 'react-slick';
import Specialists from '../Specialists/Specialists';
import { Icon } from '@iconify/react';

const About4 = ({ data, data1 }) => {
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
  const { imgSrc, title, textLine } = data;
  return (
    <section id="pengurus">
      <div className="st-height-b120 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="st-left-full-width">
              <div className="text-center">
                <img src={imgSrc} alt={imgSrc} />
              </div>
            </div>
          </div>
          {/* .col */}
          <div className="col-xl-6">
            <div className="st-vertical-middle">
              <div className="st-vertical-middle-in">
                <div className="st-text-block st-style1 st-type1">
                  <h2 className="st-text-block-title">{parser(title)}</h2>
                  <div className="st-height-b20 st-height-lg-b20" />
                  <div className="st-text-block-text">
                    {
                      textLine.map((elements, index) => (
                        <p key={index}>{elements.text}</p>
                      ))
                    }
                    <div className="st-height-b15 st-height-lg-b15" />
                    <ScrollLink
                      to="gallery"
                      className="st-btn st-style1 st-color4  st-size-medium st-smooth-move"
                    >
                      Lihat Galeri Gambar
                    </ScrollLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* .col */}
        </div>
      </div>
      {/* <div className="st-height-b120 st-height-lg-b80" /> */}
      <div className="st-height-b55 st-height-lg-b80" />
      <div className="container">
        <Slider {...settings} className='st-slider-style2'>
          {
            data1.map((elements, index) => (
              <Specialists {...elements} key={index} />
            ))
          }
        </Slider>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>

  )
}

export default About4
