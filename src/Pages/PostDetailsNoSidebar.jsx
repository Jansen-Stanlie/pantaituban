import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
const PostDetailsNoSidebar = () => {
    const postImages = [
        { img: '/images/garam/garam1.png' },
        { img: '/images/garam/garam2.png' },
        { img: '/images/garam/bg-garam4.jpg' },
    ];
    const postImages2 = [
        { img: '/images/garam/garam-ed1.jpg' },
        { img: '/images/garam/garam-ed2.jpg' },
        { img: '/images/garam/garam-ed3.jpg' },
        { img: '/images/garam/garam-ed4.jpg' },
        { img: '/images/garam/garam-ed5.jpg' },
    ];
    const settings = {
        dots: true,
        infinite: true,
        loop: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const { t } = useTranslation();
    return (
        <div className="st-content">
            <div
                className="st-page-heading st-dynamic-bg"
                style={{ backgroundImage: `url('/images/garam/bg-garam3.jpg')` }}
            >
                <div className="container">
                    <div className="st-page-heading-in text-center">
                        <h4>
                            <Link to="/" className="st-back-to-home">
                                <Icon icon="ph:arrow-left-bold" />
                                Back To Home
                            </Link>
                        </h4>
                        <h1 className="st-page-heading-title">
                            Proses Edukasi Pembuatan Garam:<br />
                            Dari Air Laut Menjadi Kristal Garam Berkualitas.
                        </h1>
                        <div className="st-post-label">
                            <span>
                                By <Link>Pokdarwis</Link>
                            </span>
                            <span>Apr 21, 2025</span>
                        </div>
                        <div className="st-height-b20 st-height-lg-b20" />
                        <div className="st-hero-btn-group">
                            <a
                                href="/files/sample.pdf"
                                download
                                className="st-btn st-style1 st-size-medium st-color1"
                            >
                                Edukasi Pembuatan Garam
                                <i className="fas fa-download" style={{ marginLeft: "8px" }}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* .st-page-heading */}
            <div className="st-height-b20 st-height-lg-b80" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="st-post-details st-style1">
                            <div className="st-post-info">
                                <div className="st-post-text">
                                    <h2>Manfaat Garam Alami di Pantai Kelapa</h2>
                                    <p>
                                        Temukan manfaat alami dari garam laut tradisional sebagai solusi sehat yang saling menguntungkan.
                                        Di tengah meningkatnya kesadaran akan gaya hidup sehat, produk lokal seperti
                                        <b><i><strong> Garam Pantai Kelapa dari Tuban, Jawa Timur </strong></i></b>
                                        menjadi elemen penting dalam mendukung keseimbangan tubuh.
                                        Garam ini kaya akan mineral alami seperti magnesium dan kalium,
                                        yang bermanfaat untuk menjaga keseimbangan elektrolit dan fungsi tubuh secara keseluruhan.
                                    </p>
                                    <p>
                                        Garam Pantai Kelapa dihasilkan melalui metode <strong><b><i>GST (Greenhouse Salt Tunnel)</i></b></strong> dan <strong><b><i>CDM (Continuous Dynamic Mixing)</i></b>,
                                        </strong> yang menggabungkan proses alami dengan teknologi modern untuk menjaga kemurnian mineral.
                                        Garam ini tidak hanya bermanfaat untuk konsumsi sehat,
                                        tetapi juga mendukung detoksifikasi tubuh, hidrasi, dan perawatan kulit alami.
                                        Rasakan perpaduan tradisi dan inovasi modern dalam setiap butir Garam Pantai Kelapa.
                                    </p>

                                    <img
                                        className="st-zoom-in"
                                        src="/images/garam/bg-garam2.jpg"
                                        alt="blog1"
                                    />
                                    <p> </p>
                                    <h2>GST (Greenhouse Salt Tunnel) dan
                                        CDM (Continuous Dynamic Mixing)
                                    </h2>

                                    <p>
                                        Greenhouse Salt Tunnel (GST) adalah terobosan teknologi modern untuk mengatasi ketergantungan produksi garam terhadap cuaca.
                                        Dengan memanfaatkan sistem rumah kaca yang dilengkapi sirkulasi udara dan lapisan plastik UV serta geomembrane,
                                        GST mampu mempercepat proses kristalisasi dan meningkatkan hasil produksi garam rakyat hingga 70%.
                                        Hasilnya? Garam berkualitas K-1 sesuai standar SNI, bahkan cocok untuk garam infus.
                                    </p>
                                    <p>
                                        Dipadukan dengan metode Continuously Dynamic Mixing (CDM),
                                        teknologi ini menjadi yang pertama di Indonesia yang
                                        memungkinkan produksi garam tetap berjalan meski di musim hujan.

                                    </p>

                                    <Slider {...settings} className="st-slider-style1">
                                        {postImages.map((elements, index) => (
                                            <img
                                                key={index}
                                                className="st-zoom-in"
                                                src={elements.img}
                                                alt={elements.img}

                                            />
                                        ))}
                                    </Slider>
                                    <p>
                                        GST dan CDM membuka peluang produksi garam non-stop sepanjang tahun,
                                        menjadikan Indonesia selangkah lebih maju dalam teknologi garam modern.
                                    </p>
                                    <h2>Green House Salt Tunnel Wisata Pantai Kelapa</h2>
                                    {/* For Youtube */}
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            title="embeded video"
                                            className="embed-responsive-item"
                                            width={816}
                                            height={459}
                                            src="https://www.youtube.com/embed/6rsq1jodaMU?si=hvQ2lSabop7PFfzW"
                                            allowFullScreen=""
                                        ></iframe>
                                    </div>
                                    <p>
                                        keberadaan Green House Salt Tunnel di kawasan Pantai Kelapa
                                        tidak hanya bertujuan sebagai sarana edukasi,
                                        terutama bagi para pelajar dalam mempelajari proses pembuatan garam,
                                        tetapi juga sebagai inovasi dalam dunia wisata dan kesehatan
                                    </p>
                                    <p>
                                        Green House Salt Tunnel merupakan metode modern pembuatan garam dengan sistem terowongan,
                                        yang menjadi terobosan baru dibandingkan metode konvensional.
                                        Proses produksi garam di dalam tunnel ini berlangsung lebih higienis,
                                        aman, dan nyaman, sehingga cocok untuk dijadikan tempat pembelajaran.
                                    </p>
                                    <h2>Terapi Garam di Tempat Wisata?</h2>
                                    <p>
                                        Inovasi unik ini lahir dari tingginya antusiasme pengunjung di kawasan wisata Pantai Kelapa Tuban.
                                        Melihat potensi tersebut, Pantai Kelapa menghadirkan sesuatu yang bukan hanya menyegarkan mata,
                                        tetapi juga menyehatkan tubuh: Terapi Garam di Pantai Kelapa.
                                    </p>
                                    <blockquote>
                                        <i>Terapi garam itu kita manfaatkan untuk memanjakan wisatawan di Pantai Kelapa ketika habis dari
                                            perjalanan jauh pasti mereka pegal,
                                            capek, reumatik dan sebagainya, dan inilah solusinya.</i>
                                        <small>
                                            by: <span>Muhasan</span>
                                        </small>
                                    </blockquote>
                                </div>

                                <Slider {...settings} className="st-slider-style1">
                                    {postImages2.map((elements, index) => (
                                        <img
                                            key={index}
                                            className="st-zoom-in"
                                            src={elements.img}
                                            alt={elements.img}
                                            height="100"
                                            width="10000"
                                        />
                                    ))}
                                </Slider>
                                <p>
                                    Terapi garam ini dapat membantu meredakan pegal-pegal,
                                    melancarkan peredaran darah, dan menyerap racun dalam tubuh secara alami.
                                    Cocok untuk Anda yang ingin melepas penat sekaligus mendapatkan manfaat kesehatan hanya dalam satu kunjungan
                                </p>
                            </div>
                            {/* .st-slider */}
                            <div className="st-height-b20 st-height-lg-b20" />

                            <div className="st-height-b35 st-height-lg-b35" />
                            <div className="st-post-meta">
                                <div className="st-post-tages">
                                    <h4 className="st-post-tage-title">Tags:</h4>
                                    <ul className="st-post-tage-list st-mp0">
                                        <li>
                                            <Link to="">Pantai Kelapa</Link>
                                        </li>
                                        <li>
                                            <Link to="">Garam Laut</Link>
                                        </li>
                                        <li>
                                            <Link to="">Terapi Garam</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="st-post-share">
                                    <h4 className="st-post-share-title">Share:</h4>
                                    <div className="st-post-share-btn-list">
                                        <Link to="">
                                            <Icon icon="fa6-brands:facebook-f" />
                                        </Link>
                                        <Link to="">
                                            <Icon icon="fa6-brands:twitter" />
                                        </Link>
                                        <Link to="">
                                            <Icon icon="fa6-brands:behance" />
                                        </Link>
                                        <Link to="">
                                            <Icon icon="fa6-brands:instagram" />
                                        </Link>
                                        <Link to="">
                                            <Icon icon="fa6-brands:pinterest-p" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="st-height-b60 st-height-lg-b60" />
                            <div className="st-height-b60 st-height-lg-b60" /> */}
                        </div>
                    </div>
                </div>
            </div >
            <a
                href="/files/sample.pdf"
                download
                className="download-float-button"
            >
                <Icon icon="mdi:download" style={{ marginRight: "8px" }} />
                Download Panduan
            </a>
            {/* <div className="st-height-b100 st-height-lg-b80" /> */}
        </div >
    );
};

export default PostDetailsNoSidebar;
