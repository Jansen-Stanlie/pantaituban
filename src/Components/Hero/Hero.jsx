import { Icon } from '@iconify/react';
import { React, useEffect, useState } from 'react';
import Slider from 'react-slick';
import TextTransition, { presets } from 'react-text-transition';
import parser from 'html-react-parser';
import { Link as ScrollLink } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
const Hero3 = ({ data }) => {
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
  const titles = ["Pantai Kelapa Tuban"]
  const newArray = titles.flatMap(element => [element, 3000]);
  const [indexs, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />
  }

  return (
    <>

      <Slider {...settings} className='st-slider-style1  st-slider-animation1' >
        {

          data.map((elements, index) => (
            <>

              <div className="st-hero st-style1 st-size1" key={index} id="home">
                <div className="st-hero-bg st-dynamic-bg overflow-hidden st-fixed-bg st-bg" style={{ backgroundImage: `url(${elements.bgImg})` }} />
                <div className="container">
                  <div className='st-height-b50 st-height-lg-b80' id='home'></div>
                  <div className="st-hero-text st-style1">

                    <h1 className="st-hero-title cd-headline clip cd-headline-style1">{parser(elements.title)}
                      <span className="cd-words-wrapper">
                        <span> </span>
                        <TypeAnimation sequence={newArray}
                          speed={50}
                          repeat={Infinity} />
                      </span>
                    </h1>
                    <div className="st-hero-subtitle">{parser(elements.subTitle)}</div>
                    <div className="st-hero-btn-group">
                      <ScrollLink
                        to="contact"
                        className="st-btn st-style1 st-size-medium st-color1 st-smooth-move"
                      >
                        Hubungi Kami
                      </ScrollLink>
                      <ScrollLink
                        to="about"
                        className="st-btn st-style1 st-size-medium st-color3 st-smooth-move"
                      >
                        Tentang Kami
                      </ScrollLink>
                    </div>
                    <div className="st-height-b15 st-height-lg-b15" />
                  </div>
                </div>
              </div>
            </>
          ))
        }
      </Slider >
    </>
  )
}

export default Hero3;
