import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import ModalImage from 'react-modal-image';
import Masonry from 'react-masonry-css';

const categoryMenu = [
  {
    title: 'Berkuda',
    category: 'berkuda',
  },
  {
    title: 'ATV Ride',
    category: 'atv',
  },
  {
    title: 'Flying Fox',
    category: 'flyfox',
  },
  {
    title: 'Swimming Pool',
    category: 'swimmingpool',
  },
  {
    title: 'Terapi Garam',
    category: 'terapigaram',
  }
  ,
  {
    title: 'Lain-lain',
    category: 'others',
  }
]

const portfolioData = [
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project1_lg.jpg',
    category: 'cardiology',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project2_lg.jpg',
    category: 'cardiology',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project3_lg.jpg',
    category: 'pulmonary',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project4_lg.jpg',
    category: 'urology',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project5_lg.jpg',
    category: 'urology',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project6_lg.jpg',
    category: 'pulmonary',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project7_lg.jpg',
    category: 'neurology',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project1_lg.jpg',
    category: 'neurology',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project2_lg.jpg',
    category: 'neurology',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project3_lg.jpg',
    category: 'traumatology',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project4_lg.jpg',
    category: 'traumatology',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project5_lg.jpg',
    category: 'traumatology',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project6_lg.jpg',
    category: 'pulmonary',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project7_lg.jpg',
    category: 'pulmonary',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/project1_lg.jpg',
    category: 'pulmonary',
    height: 299,
  },

]

const MasonryGallery = () => {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(8);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalRef = useRef(null);  // Create a ref for the modal

  const openModal = () => {
    setModalIsOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = (event) => {
    // Check if the click is outside the modal content
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalIsOpen(false);
      document.body.classList.remove('modal-open');
    }
  }; const modalOverlayRef = useRef(null)
  useEffect(() => {
    const handleOverlayClick = (event) => {
      // Check if the click is directly on the overlay element
      if (event.target === modalOverlayRef.current) {
        setModalIsOpen(false);
        document.body.classList.remove('modal-open');
      }
    };

    const overlayElement = document.querySelector('.ReactModalPortal > .ReactModal__Overlay');
    if (modalIsOpen && overlayElement) {
      modalOverlayRef.current = overlayElement;
      modalOverlayRef.current.addEventListener('click', handleOverlayClick);
    }

    return () => {
      if (modalOverlayRef.current) {
        modalOverlayRef.current.removeEventListener('click', handleOverlayClick);
      }
    };
  }, [modalIsOpen]);

  const breakPointColumns = {
    default: 4,
    1199: 3,
    767: 1,
  };

  return (
    <section id="gallery">
      <div className="st-height-b120 st-height-lg-b80" />
      <div className="container">
        <SectionHeading title="View our gallery"
          subTitle=" Immerse yourself in the beauty of Pantai Tuban through our curated collection of images. <br /> Discover breathtaking landscapes, vibrant moments, and the essence of our tropical paradise." />
      </div>
      <div className="container">
        <div className="st-portfolio-wrapper">
          <div className="st-isotop-filter st-style1 text-center">
            <ul className="st-mp0">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li className={active === item.category ? 'active' : ''} key={index} >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Masonry className="st-isotop st-style1 st-has-gutter st-lightgallery my-masonry-grid" breakpointCols={breakPointColumns}>
            {portfolioData.slice(0, itemShow).map((element, index) => (
              <div key={index} className={`st-isotop-item ${active === 'all' ? '' : !(active === element.category) ? 'd-none' : ''}`}>
                <div className="st-project st-zoom st-lightbox-item st-link-hover-wrap">
                  {/* <ModalImage
                    className='st-gallery-modal-initial-hidden'
                    small={element.img}
                    large={element.img}
                    alt={element.img}
                    hideDownload={false}
                    hideZoom={false}
                    isOpen={modalIsOpen}
                    onClick={openModal}
                    onClose={closeModal}
                  /> */}
                  <div className="st-project-img st-zoom-in" onClick={openModal}>
                    <img className='st-hover-hidden' src={element.img} alt={element.img} />
                  </div>
                  {/* <span className="st-link-hover">
                    <i><Icon icon="fa-solid:arrows-alt" /></i>
                  </span> */}
                </div>
              </div>
            ))}
          </Masonry>
          <div className="text-center">
            {active === 'all' ? portfolioData.length <= itemShow ? (
              ''
            ) : (
              <>
                <div className="st-height-b65 st-height-lg-b40" />
                <span className="st-btn st-style1 st-color1 st-size-medium st-flex-center st-gap-x-5" onClick={() => setItemShow(itemShow + 4)} >
                  <span>Load More</span>
                  <Icon icon="bi:arrow-right" />
                </span>
              </>
            ) : ""}
          </div>
        </div>
      </div>
      {/* <div className="st-height-b120 st-height-lg-b80" /> */}
    </section>
  )
}

export default MasonryGallery;
