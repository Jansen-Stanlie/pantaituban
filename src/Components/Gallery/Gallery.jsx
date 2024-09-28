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
    category: 'flyingfox',
  },
  {
    title: 'Swimming Pool',
    category: 'swimmingpool',
  },
  {
    title: 'Camping',
    category: 'camping',
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
    img: '/images/gallery/acara1.jpg',
    category: 'others',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/gallery/acara2.jpg',
    category: 'others',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/gallery/acara3.jpg',
    category: 'others',
    height: 299,

  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/gallery/camping1.jpg',
    category: 'camping',
    height: 299,
  },
  {

    href: '/portfolio/portfolio-details',
    img: '/images/gallery/camping4.jpg',
    category: 'camping',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/gallery/berkuda1.jpg',
    category: 'berkuda',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/gallery/atv1.jpg',
    category: 'atv',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/gallery/atv4.jpg',
    category: 'atv',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/gallery/flyingfox.jpg',
    category: 'flyingfox',
    height: 299,
  }, {
    href: '/portfolio/portfolio-details',
    img: '/images/gallery/flyingfox1.jpg',
    category: 'flyingfox',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/gallery/swimmingpool1.jpg',
    category: 'swimmingpool',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/gallery/Terapigaram1.jpg',
    category: 'terapigaram',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/gallery/acara4.jpg',
    category: 'others',
    height: 299,
  },
  {
    href: '/portfolio/portfolio-details',
    img: '/images/gallery/acara6.jpg',
    category: 'others',
    height: 299,
  },
]

const MasonryGallery = () => {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(20);
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
        <SectionHeading title="Abadikan Momen Tak Terlupakan"
          subTitle="Biarkan diri Anda terpesona oleh keindahan Pantai Tuban melalui galeri foto kami.  <br />  Saksikan panorama yang menakjubkan, momen-momen tak terlupakan, dan warna-warni kehidupan pantai." />
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
