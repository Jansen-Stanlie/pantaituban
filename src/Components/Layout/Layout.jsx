import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Preloader from '../Preloader/Preloader'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Analytics } from '@vercel/analytics/react'
const headerData = {
  "logo": "/images/logo.png"
}

const footerData = {
  "logo": "/images/footer-logo.png",
  "bgImg": "",
  subTitle: "Pantai Kelapa: Tempat Keluarga Berkumpul, Bermain, dan Menciptakan Kenangan Indah."
}
const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header data={headerData} />
          <Outlet>
            <Analytics id="X2Z6L3E4" />
          </Outlet>
          <Footer data={footerData} />

          <a
            href="https://wa.me/6285745410187"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
          >
            <i className="fab fa-whatsapp my-float"></i> {/* Font Awesome icon */}
          </a>
        </>
      )} {showScrollToTop && (
        <button onClick={(e) => {
          e.preventDefault(); // Prevent default link behavior
          scrollToTop();
        }} className="scroll-to-top">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default Layout;
