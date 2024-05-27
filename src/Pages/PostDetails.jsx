import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const PostDetails = () => {
  const postImages = [
    { img: '/images/hero-bg3.jpg' },
    { img: '/images/hero-bg4.jpg' },
    { img: '/images/hero-bg5.jpg' },
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

  return (
    <div className="st-content">
      <div
        className="st-page-heading st-dynamic-bg"
        style={{ backgroundImage: `url('/images/hero-bg2.jpg')` }}
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
              Penghargaan yang Didapat Pantai Tuban (Awards Received by Tuban Beach).
            </h1>
            <div className="st-post-label">
              <span>
                By <Link>Jhon Doe</Link>
              </span>
              <span>Jan 02, 2020</span>
            </div>
          </div>
        </div>
      </div>
      {/* .st-page-heading */}
      <div className="st-height-b100 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="st-post-details st-style1">
              <h2>Raih Penghargaan Terbaik EJTA 2023</h2>
              <p>
                Segala puji syukur kepada Tuhan yang maha Esa, diawali dari niat untuk meningkatkan ekonomi dan manfaat kepada masyarakat sampai dapat membawa nama harum KOTA TUBAN…
                Pantai Kelapa meraih penghargaan East Java Tourism Award (EJTA) 2023 TERBAIK kategori Wisata Alam Buatan Pengelola Kelompok Masyarakat.
              </p>
              <p>
                Penghargaan diserahkan langsung oleh Gubernur Jawa Timur kepada Kepala Disbudporapar Tuban bersama Ketua Pengelola Wisata Pantai Kelapa, Penyerahan penghargaan dilaksanakan pada hari Selasa 31 Oktober 2023 di Taman Candra Wilwatika, Pandaan

                Pantai kelapa Tuban selalu memberikan yang terbaik❤️
              </p>
              <img
                className="st-zoom-in"
                src="/images/blog1.jpg"
                alt="blog1"
              />
              <h2>Pantai Kelapa di Detik.com</h2>
              <div className="st-post-info">
                <div className="st-post-text">
                  <p className="intro-text">
                    Tuban di Jawa Timur, yang dikenal sebagai kota santri, memiliki lebih dari sekadar wisata religi. Tersembunyi di pesisirnya, terdapat pantai yang asri dan eksotis, yaitu <b>Pantai Kelapa</b>.
                  </p>

                  <h2 className="section-title">Fakta Menarik Pantai Kelapa Tuban</h2>

                  <div className="facts-list">
                    <p className="numbered-fact">
                      <span className="fact-number"></span>
                      <span className="fact-title">Penamaan Wisata Pantai Kelapa </span>
                      Pantai ini mendapatkan namanya dari banyaknya pohon kelapa yang menghiasi sekitarnya, menjadikannya mudah diingat oleh para wisatawan.
                    </p>
                    <p className="numbered-fact">
                      <span className="fact-number"></span>
                      <span className="fact-title">Lokasi & Rute ke Pantai Kelapa </span>
                      Terletak di Desa Panyuran, Kecamatan Palang, Kabupaten Tuban, Jawa Timur. Dari pusat kota Tuban, pantai ini berjarak sekitar 5 km. Jika Anda datang dari arah Semarang atau Rembang, ikuti Jalan Pantura hingga mencapai jalur paling utara provinsi Jawa Timur.
                    </p>
                    <p className="numbered-fact">
                      <span className="fact-number"></span>
                      <span className="fact-title">Harga Tiket Masuk Pantai Kelapa Tuban </span>
                      Harga tiket masuk sangat terjangkau, hanya Rp 5.000 per orang. Untuk kendaraan, dikenakan biaya tambahan: roda dua Rp 2.000, roda empat Rp 5.000, dan bis Rp 10.000.
                    </p>
                    <p className="numbered-fact">
                      <span className="fact-number"></span>
                      <span className="fact-title">Fasilitas </span>
                      Destinasi wisata ini menawarkan juga berbagai fasilitas yang bisa kamu coba nih, seperti flying fox, berkuda, panggung hiburan, tempat bermain anak,dan kolam renang.

                      Tak hanya itu, kamu juga bisa mencicipi ragam kuliner yang telah disediakan di Pantai Kelapa ini, mulai dari makanan berat hingga minuman menyegarkan, seperti es degan.
                    </p>
                    <p className="numbered-fact">
                      <span className="fact-number"></span>
                      <span className="fact-title">Pantai yang Memiliki Hutan Bakau dan Pepohonan Cemara </span>
                      Tak hanya wisata pantai nih, banyak orang yang datang untuk berkunjung pula ke area hutan bakau nih. Jika kamu bosan dengan keramaian di sekitaran pantai, kamu bisa singgah ke lingkungan asri hutan bangkau.

                      Faktanya, tak hanya hutan bakau saja yang menjadi daya tarik dari Pantai Kelapa ini, di sekitar pantai pun terdapat pepohonan cemara yang rindang. Kamu bisa menikmatinya rindangnya pohon cemara saat siang hari nih. Oleh karena itu, sebagian wisatawan menyebutnya dengan Pantai Cemara Tuban.
                      Tentunya, menyenangkan bisa menikmati pengalaman yang berbeda untuk menikmati keindahan Pantai Kelapa.
                    </p>
                    <p className="numbered-fact">
                      <span className="fact-number"></span>
                      <span className="fact-title">Tempat Berkemah </span>
                      Kegiatan berkemah rupanya tidak hanya dilakukan di gunung saja loh. Hal ini dibuktikan objek wisata ini juga dikenal sebagai bumi perkemahan.
                      Faktanya, setiap musim liburan, ada beberapa lembaga pendidikan dari wilayah sekitar Tuban, Lamongan dan Bojonegoro mengadakan kegiatan perkemahan di Pantai Kelapa Panyuran Tuban.
                    </p>
                    <p className="numbered-fact">
                      <span className="fact-number"></span>
                      <span className="fact-title">Ikon Wisata Baru Tuban </span>
                      Adanya suntikan dana anggaran pendapatan dan belanja daerah (APBD), kini Pantai Kelapa diubah menjadi destinasi wisata yang wajib kamu kunjungi nih. Dengan dana tersebut telah berhasil mengubah wajah pantai yang dulunya kumuh, kini menjadi tertata rapi, bersih dan layak untuk dikunjungi sebagai tempat wisata.
                    </p>
                  </div>

                  <h2 className="section-title">Video Pantai Kelapa:</h2>
                  <div className="embed-responsive embed-responsive-16by9 video-container">
                    <iframe
                      title="Video Pantai Kelapa"
                      className="embed-responsive-item"
                      width="816"
                      height="459"
                      src="https://www.youtube.com/embed/pyuEFIEnMGc?si=zlBNA1ZZGo6yMr4N"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              {/* .st-slider */}
              <div className="st-height-b20 st-height-lg-b20" />
              <p>
                Nah, sekarang tinggal sikap dari diri sendiri yang menjaga kebersihan dan tertib saat berkunjung ke tempat wisata ya.
              </p>
              <div className="st-height-b35 st-height-lg-b35" />
              <div className="st-post-meta">
                <div className="st-post-tages">
                  <h4 className="st-post-tage-title">Tags:</h4>
                  <ul className="st-post-tage-list st-mp0">
                    <li>
                      <Link to="">detik.com</Link>
                    </li>
                    <li>
                      <Link to="">pantai tuban</Link>
                    </li>
                    <li>
                      <Link to="">wisata</Link>
                    </li>

                  </ul>
                </div>
                <div className="st-post-share">
                  <h4 className="st-post-share-title">Share:</h4>
                  <div className="st-post-share-btn-list">
                    <Link to="https://www.facebook.com/PokdarwisPantaiKelapaa?mibextid=LQQJ4d">
                      <Icon icon="fa6-brands:facebook-f" />
                    </Link>
                    <Link to="">
                      <Icon icon="fa6-brands:twitter" />
                    </Link>
                    {/* <Link to="">
                      <Icon icon="fa6-brands:behance" />
                    </Link> */}
                    <Link to="">
                      <Icon icon="fa6-brands:instagram" />
                    </Link>
                    {/* <Link to="">
                      <Icon icon="fa6-brands:pinterest-p" />
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="st-height-b60 st-height-lg-b60" />
              <div className="st-post-btn-gropu">
                <Link
                  to=""
                  className="st-btn st-style2 st-color1 st-size-medium"
                >
                  Previous Post
                </Link>
                <Link
                  to=""
                  className="st-btn st-style2 st-color1 st-size-medium"
                >
                  Next Post
                </Link>
              </div>
              <div className="st-height-b60 st-height-lg-b60" />
              <div className="comments-area">
                <div className="comment-list-outer">
                  <h2 className="comments-title">Comments(0)</h2>

                  {/* .comment-list */}
                </div>
                {/* .comment-list-outer */}
                <div className="comment-respond">
                  <h2 className="comment-reply-title">Add your comment</h2>
                  <form method="post" className="comment-form">
                    <p className="comment-form-author">
                      <input
                        name="author"
                        type="text"
                        placeholder="Name*"
                        required=""
                      />
                    </p>
                    <p className="comment-form-email">
                      <input
                        name="email"
                        type="email"
                        placeholder="E-mail*"
                        required=""
                      />
                    </p>
                    <p className="comment-form-url">
                      <input
                        id="url"
                        name="url"
                        type="url"
                        placeholder="Website"
                      />
                    </p>
                    <p className="comment-form-comment">
                      <textarea
                        name="comment"
                        cols={40}
                        rows={5}
                        placeholder="Write here...*"
                        required=""
                      />
                    </p>
                    <p className="form-submit">
                      <button
                        type="submit"
                        className="st-btn st-style1 st-color1 st-size-medium"
                      >
                        Send Message
                      </button>
                    </p>
                  </form>
                </div>
                {/* .comment-respond */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/* <div className="st-height-b0 st-height-lg-b40" /> */}
            {/* <div className="st-widget st-sidebar-widget">
              <h3 className="st-widget-title">Categories</h3>
              <ul className="st-widget-list">
                <li>
                  <Link>Audio</Link>
                </li>
                <li>
                  <Link>Video</Link>
                </li>
                <li>
                  <Link>Gallery</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Patients</Link>
                </li>
              </ul>
            </div> */}
            <div className="st-height-b30 st-height-lg-b30" />
            <div className="st-widget st-sidebar-widget">
              <h3 className="st-widget-title">Arachives</h3>
              <ul className="st-widget-list">
                <li>
                  <Link>March 2020</Link>
                </li>
                <li>
                  <Link>May 2020</Link>
                </li>
                <li>
                  <Link>June 2020</Link>
                </li>
                <li>
                  <Link>August 2020</Link>
                </li>
                <li>
                  <Link>September 2020</Link>
                </li>
                <li>
                  <Link>October 2020</Link>
                </li>
              </ul>
            </div>
            <div className="st-height-b30 st-height-lg-b30" />
            <div className="st-widget st-sidebar-widget">
              <h3 className="st-widget-title">Recent Post</h3>
              <ul className="st-post-widget-list st-mp0">
                <li>
                  <div className="st-post st-style1">
                    <Link to="" className="st-post-thumb st-zoom">
                      <img
                        src="/images/blog1.jpg"
                        alt="post1"
                        className="st-zoom-in"
                      />
                    </Link>
                    <div className="st-post-info">
                      <h2 className="st-post-title">
                        <a href="blog-details-right-sidebar.html">
                          Raih Penghargaan Terbaik EJTA 2023
                        </a>
                      </h2>
                      <div className="st-post-date">Oct 31, 2023</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="st-post st-style1">
                    <Link to="" className="st-post-thumb st-zoom">
                      <img
                        src="/images/blog2.jpg"
                        alt="post2"
                        className="st-zoom-in"
                      />
                    </Link>
                    <div className="st-post-info">
                      <h2 className="st-post-title">
                        <a href="blog-details-right-sidebar.html">
                          Pantai Kelapa di Detikcom...
                        </a>
                      </h2>
                      <div className="st-post-date">Aug 22, 2020</div>
                    </div>
                  </div>
                </li>
                {/* <li>
                  <div className="st-post st-style1">
                    <Link to="" className="st-post-thumb st-zoom">
                      <img
                        src="/images/rs-post3.jpg"
                        alt="post2"
                        className="st-zoom-in"
                      />
                    </Link>
                    <div className="st-post-info">
                      <h2 className="st-post-title">
                        <a href="blog-details-right-sidebar.html">
                          World Parkinson’s Day 2020 comes...
                        </a>
                      </h2>
                      <div className="st-post-date">Jan 05, 2020</div>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
            <div className="st-height-b30 st-height-lg-b30" />
            <div className="st-widget st-sidebar-widget">
              <h3 className="st-widget-title">Popular Tags</h3>
              <div className="st-tagcloud">
                <Link to="" className="st-tag">
                  Gallery
                </Link>
                <Link to="" className="st-tag">
                  Awards
                </Link>
                <Link to="" className="st-tag">
                  Vacation
                </Link>
                <Link to="" className="st-tag">
                  News
                </Link>
                <Link to="" className="st-tag">
                  Beach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80" />
    </div>
  );
};

export default PostDetails;
