import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Preloader from '../Preloader/Preloader'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Analytics } from '@vercel/analytics/react'
import { useTranslation } from 'react-i18next'
const headerData = {
  "logo": "/images/logo.png"
}

const Layout = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  const footerData = {
    "logo": "/images/footer-logo.png",
    "bgImg": "",
    subTitle: t("footer.title"),
  }
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
            <Analytics />
          </Outlet>
          <Footer data={footerData} />

          <a
            href="https://wa.me/6285745410187"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
          >
            <i className="fab fa-whatsapp my-float"></i>
          </a>
          {/* <a
            href="/files/sample.pdf"
            download
            className="download-float"
            title="Download PDF"
          >
            <i className="fas fa-file-pdf my-float"></i>

          </a> */}
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
