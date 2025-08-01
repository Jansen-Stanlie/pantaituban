import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import LocationInMap from "../Components/Map/LocationInMap";
import Contact from "../Components/Contact/Contact";
import Department from "../Components/Department/Department";
import Appointment from "../Components/Appointment/Appointment";
import About from "../Components/About/About";
import About4 from "../Components/About/About4";
import Iconbox from "../Components/Iconbox/Iconbox";
import PostWrapper from "../Components/Post/PostWrapper";
import SpecialistsSlider from "../Components/Slider/SpecialistsSlider";
import TestimonialSlider from "../Components/Slider/TestimonialSlider";
import BrandSlider from "../Components/Slider/BrandSlider";
import Newsletter from "../Components/Newsletter/Newsletter";
import Accordion from "../Components/Accordion/Accordion";
import PriceSlider from "../Components/Slider/PriceSlider";
import Funfact from "../Components/Funfact/Funfact";
import BeforeAfter from "../Components/BeforeAfter/BeforeAfter";
import MasonryGallery from "../Components/Gallery/Gallery";
import { Analytics } from '@vercel/analytics/react'
import { useTranslation } from 'react-i18next';
import VideoModal from '../Components/VideoModal/VideoModal';

const Home = () => {
  const [latestPosts, setLatestPosts] = useState([])
  const [latestVideo, setLatestVideo] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [iframeSrc, setIframeSrc] = useState('about:blank')
  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const res = await fetch('https://pantaikelapa-panel.my.id/api/pages/post/public?page=1&limit=3&sortBy=publishedAt&order=desc&isPublished=true&isDeleted=false')
        const json = await res.json()

        // 👉 Restructure sesuai kebutuhan frontend
        const formattedPosts = (json?.data?.posts || []).map(post => ({
          img: post.img,
          title: post.title,
          date: new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }),
          author: post.author?.name || 'Unknown',
          authorLink: '', // kosong karena data tidak ada
          subTitle: post.subTitle,
          postLink: post.postLink,
          truncateText: post.truncateText || post.subTitle?.slice(0, 80) + '...'
        }))

        setLatestPosts(formattedPosts)
      } catch (error) {
        console.error('❌ Error fetching posts:', error)
      }
    }

    fetchLatestPosts()
  }, [])

  // Fetch video terbaru
  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const res = await fetch('https://pantaikelapa-panel.my.id/api/pages/playback/public');
        const json = await res.json();
        if (json?.data?.videoUrl) {
          const url = new URL(json.data.videoUrl);
          const v = new URLSearchParams(url.search).get('v');
          if (v) {
            setLatestVideo(`https://www.youtube.com/embed/${v}?autoplay=1`);
          }
        }
      } catch (err) {
        console.error('❌ Error fetching latest video:', err);
      }
    };
    fetchLatestVideo();
  }, []);

  // Tampilkan modal jika video ready
  useEffect(() => {
    if (latestVideo) {
      setIframeSrc(latestVideo);
      setToggle(true);
    }
  }, [latestVideo]);

  // const heroData = {
  //   bgImg: "images/hero-bg.jpg",
  //   bgShape: "shape/hero-shape.png",
  //   sliderImages: [
  //     {
  //       img: "images/hero-img.png",
  //     },
  //     {
  //       img: "images/hero-img1.png",
  //     },
  //     {
  //       img: "images/hero-img2.png",
  //     },
  //     {
  //       img: "images/hero-img.png",
  //     },
  //     {
  //       img: "images/hero-img1.png",
  //     },
  //     {
  //       img: "images/hero-img2.png",
  //     },
  //   ],
  //   title: [
  //     "Pantai Kelapa Tuban",
  //     "Wisata Pantai Tuban",
  //   ],
  // };
  const { t } = useTranslation();

  const heroData = [
    {
      title: t("Hero.title11"),
      subTitle: t("Hero.subTitle1"),
      bgImg: '/images/garam/bg-garam3.jpg',
    },
    {
      title: t("Hero.title11"),
      subTitle: t("Hero.subTitle1"),
      bgImg: '/images/hero-bg.jpg',
    },
    {
      title: t("Hero.title2"),
      subTitle: t("Hero.subTitle2"),
      bgImg: '/images/hero-bg3.jpg',
    }
  ];
  const iconboxData = [
    {
      bg: "blue",
      icon: "icons/sun.svg",
      title: t("iconData.title1"),
      subTitle: t("iconData.subTitle1"),
    },
    {
      bg: "purple",
      icon: "icons/surfboard.svg",
      title: t("iconData.title2"),
      subTitle: t("iconData.subTitle2"),
    },
    {
      bg: "red",
      icon: "icons/cocktail.svg",
      title: t("iconData.title3"),
      subTitle: t("iconData.subTitle3"),
    },
  ];
  const aboutData2 = {
    imgSrc: `images/about2.png`,
    title: t("aboutData2.title1"),
    textLine: [
      { text: t("aboutData2.textline.text1") },

      {
        text: t("aboutData2.textline.text2"),
      },
    ],
  };
  const aboutData = {
    title: t("aboutData.title"),
    subTitle: t("aboutData.subTitle"),
    avater: {
      img: "images/avatar1.png",
      name: "pokdarwis pantai kelapa",
      designation: "Contact person",
    },
    timeTable: [
      {
        day: t("aboutData.timeTable.day1"),
        startTime: "8:00",
        endTime: "5:00",
      },
      {
        day: t("aboutData.timeTable.day2"),
        startTime: "8:00",
        endTime: "5:00",
      },
      {
        day: t("aboutData.timeTable.day3"),
        startTime: "8:00",
        endTime: "5:00",
      },
      {
        day: t("aboutData.timeTable.day4"),
        startTime: "8:00",
        endTime: "5:00",
      },
      {
        day: t("aboutData.timeTable.day5"),
        startTime: "8:00",
        endTime: "5:00",
      },
      {
        day: t("aboutData.timeTable.day6"),
        startTime: "8:00",
        endTime: "5:00",
      },
      {
        day: t("aboutData.timeTable.day7"),
        startTime: "8:00",
        endTime: "5:00",
      },
    ],
    contact: "(+62) 8574 5410 187",
  };

  const specialistData = [
    {
      img: "images/Pengurus_0000.jpg",
      name: "Muhasan, SH.",
      designation: t("specialist.title1"),
      authorLink: "/doctor-profile",
    },
    {
      img: "images/Pengurus_0001.jpg",
      name: "Mokhamad Khanafi",
      designation: t("specialist.title2"),
      authorLink: "/doctor-profile",
    }, {
      img: "images/Pengurus_0003.jpg",
      name: "Heri Poernomo, SE.",
      designation: t("specialist.title3"),
      authorLink: "/doctor-profile",
    },
    {
      img: "images/Pengurus_0002.jpg",
      name: "Muhammad Ludfi, A.Md.",
      designation: t("specialist.title4"),
      authorLink: "/doctor-profile",
    },
    {
      img: "images/Pengurus_0006.jpg",
      name: "Ahmad Rofiq, ST.",
      designation: t("specialist.title5"),
      authorLink: "/doctor-profile",
    },
    {
      img: "images/Pengurus_0004.jpg",
      name: "Muhammad Hariyono",
      designation: t("specialist.title6"),
      authorLink: "/doctor-profile",
    },
    {
      img: "images/Pengurus_0005.jpg",
      name: "Sujito",
      designation: t("specialist.title7"),
      authorLink: "/doctor-profile",
    },

    {
      img: "images/Pengurus_0007.jpg",
      name: "Ahmad Ikhwan",
      designation: t("specialist.title8"),
      authorLink: "/doctor-profile",
    },
    {
      img: "images/Pengurus_0008.jpg",
      name: "Zaenal Abidin",
      designation: t("specialist.title9"),
      authorLink: "/doctor-profile",
    },
  ];

  const beforeAfterData = {
    bgImg: "/images/before-after-bg.jpg",
    beforeImg: "/images/after.jpg",
    afterImg: "images/before.jpg",
  };

  const testimonialData = [
    {
      img: "images/avatar2.png",
      name: "David Bayu Nur Fauzi",
      designation: "Content Creator",
      subTitle: t("Testimonial.user.user1Comment"),
    },
    {
      img: "images/avatar3.png",
      name: "D. Ayu Puspita .A",
      designation: "Travel Blogger",
      subTitle:
        t("Testimonial.user.user2Comment"),
    },
    {
      img: "images/avatar4.png",
      name: "Yan Ardi Abdul Hakim",
      designation: "Travel Blogger",
      subTitle:
        t("Testimonial.user.user3Comment"),
    },
    {
      img: "images/avatar5.png",
      name: "Nafisa",
      designation: "Family Vacationer",
      subTitle:
        t("Testimonial.user.user4Comment"),
    },
  ];

  // const priceData = [
  //   {
  //     title: "Berkuda",
  //     price: "39",
  //     featureList: [
  //       {
  //         title: "First Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Second Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Third Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Fourth Description",
  //         status: "0",
  //       },
  //       {
  //         title: "Fifth Description",
  //         status: "0",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Perahu",
  //     price: "89",
  //     featureList: [
  //       {
  //         title: "First Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Second Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Third Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Fourth Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Fifth Description",
  //         status: "0",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Flying Fox",
  //     price: "150",
  //     featureList: [
  //       {
  //         title: "First Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Second Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Third Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Fourth Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Fifth Description",
  //         status: "1",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Swimming Pool",
  //     price: "39",
  //     featureList: [
  //       {
  //         title: "First Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Second Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Third Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Fourth Description",
  //         status: "0",
  //       },
  //       {
  //         title: "Fifth Description",
  //         status: "0",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ATV Riding",
  //     price: "89",
  //     featureList: [
  //       {
  //         title: "First Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Second Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Third Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Fourth Description",
  //         status: "1",
  //       },
  //       {
  //         title: "Fifth Description",
  //         status: "0",
  //       },
  //     ],
  //   },
  // ];
  const priceData = [
    {
      image: 'images/template wahana/Spot_foto.png',
      price: '$199',
      title: 'Spot Foto Plan',
      featureList: [
        // 'Unlimited photos',
        // 'Professional photographer',
        // 'Online gallery',
        // ... more features
      ],
    },
    {
      image: 'images/template wahana/Berkuda.png',
      price: '$199',
      title: 'Berkuda Plan',
      featureList: [
        // 'Unlimited photos',
        // 'Professional photographer',
        // 'Online gallery',
        // ... more features
      ],
    },
    {
      image: 'images/template wahana/Atv.png',
      price: '$299',
      title: 'ATV Plan',
      featureList: [
        // '1 hour ATV ride',
        // 'Guided tour',
        // 'Safety gear included',
        // ... more features
      ],
    },
    {
      image: 'images/template wahana/FlyingFox.png',
      price: '$399',
      title: 'Flying Fox Plan',
      featureList: [
        // 'Two zipline rides',
        // 'Scenic views',
        // 'Safety briefing',
        // ... more features
      ],
    },
    {
      image: 'images/template wahana/Swimming.png',
      price: '$499',
      title: 'Swimming Pool Plan',
      featureList: [
        // 'Full day pool access',
        // 'Towel provided',
        // 'Locker access',
        // ... more features
      ],
    },
    {
      image: 'images/template wahana/Terapi.png',
      price: '$499',
      title: 'Terapi Plan',
      featureList: [
        // '1-hour massage session',
        // 'Choice of massage types',
        // 'Relaxing atmosphere',
        // ... more features
      ],
    },
    {
      image: 'images/template wahana/Tunnel.png',
      price: '$499',
      title: 'Tunnel Plan',
      featureList: [
        // 'Guided tunnel exploration',
        // 'Historical information',
        // 'Safety equipment',
        // ... more features
      ],
    },
    {
      image: 'images/template wahana/Seafood.png',
      price: '$499',
      title: 'Seafood Plan',
      featureList: [
        // 'All-you-can-eat seafood buffet',
        // 'Variety of seafood dishes',
        // 'Drinks included',
        // ... more features
      ],
    },
    {
      image: 'images/template wahana/mobil-listrik.png',
      price: '$499',
      title: 'Mobil Listrik Plan',
      featureList: [
        // 'All-you-can-eat seafood buffet',
        // 'Variety of seafood dishes',
        // 'Drinks included',
        // ... more features
      ],
    },
    {
      image: 'images/template wahana/panggung-gembira.png',
      price: '$499',
      title: 'Panggung Gembira Plan',
      featureList: [
        // 'All-you-can-eat seafood buffet',
        // 'Variety of seafood dishes',
        // 'Drinks included',
        // ... more features
      ],
    },
    {
      image: 'images/template wahana/Cafe.png',
      price: '$499',
      title: 'Cafe Plan',
      featureList: [
        // 'All-you-can-eat seafood buffet',
        // 'Variety of seafood dishes',
        // 'Drinks included',
        // ... more features
      ],
    }
  ];

  const faqData = {
    title: t("faq.sectionTitle"),
    img: "images/faq-img.png",
    bgImg: "shape/faq-bg.svg",
    faqItems: [
      {
        title: t("faq.items.item1.title"),
        content: t("faq.items.item1.desc"),
      },
      {
        title: t("faq.items.item2.title"),
        content: t("faq.items.item2.desc"),
      },
      {
        title: t("faq.items.item3.title"),
        content: t("faq.items.item3.desc"),
      },
      {
        title: t("faq.items.item4.title"),
        content: t("faq.items.item4.desc"),
      },
    ],
  };

  const newsletterData = {
    bgImg: "images/news-letter-bg.png",
    contact: "(+62) 8574 5410 187",
  };

  const postData =
    [
      //   {
      //   img: "images/blog3.jpg",
      //   title: "TDA Jatim 1 Gelar Family Fun Camp",
      //   date: "Jul 21, 2024",
      //   author: "nur syaifudin",
      //   authorLink: "",
      //   subTitle:
      //     "Komunitas Pengusaha Tangan Di Atas (TDA) Jatim 1 menggelar family fun camp di lokasi Wisata Pantai Kelapa Tuban selama dua hari berturut-turut mulai Sabtu-Minggu (20-21/7/2024). Dalam kesempatan itu para pebisnis TDA juga mengajak keluarga mereka masing-masing agar acara semakin meriah.",
      //   postLink: "https://harianbangsa.net/tda-jatim-1-gelar-family-fun-camp-bersama-keluarga-begini-tujuannya",
      // 
      // },
      {
        img: "/images/garam/garam-ed3.jpg",
        title: "Proses Edukasi Pembuatan Garam: Dari Air Laut Menjadi Kristal Garam Berkualitas",
        date: "Apr 21, 2025",
        author: " Pantai Kelapa",
        authorLink: "",
        subTitle:
          "Pengelola Wisata Pantai Kelapa terus berkomitmen untuk memberikan pelayanan yang terbaik untuk pengunjung, dengan memberikan fasilitas-fasilitas yang dapat menunjang kenyamanan ataupun keamanan bagi para wisatawan. Salah satunya, dengan menghadirkan Green House Salt Tunnel di wisata tersebut.",
        postLink: "/post/gst",

      },
      {
        img: "https://www.ototrend.com/images/2025/02/24/IMG_20250224_221110.jpg",
        title: "Pantai Kelapa Otocontest #1 – Tuban: Perdana, Otomotif dan Pariwisata Bersinergi, Dibanjiri Ratusan Peserta dan Banjir Doorprize.",
        date: "Feb 24, 2025",
        author: " Pantai Kelapa",
        authorLink: "",
        subTitle:
          "Managemen Pantai Kelapa Tuban bareng Honda Squad Tuban sukses pertama kali menggelar event kontes modifikasi motor. Bertajuk “Pantai Kelapa Otocontest #1” yang rapi terkemas di Pantai Kelapa Minggu 23 Februari silam.",
        postLink: "https://www.ototrend.com/oto-info/132-oto-mania/29228-pantai-kelapa-otocontest-1-tuban-perdana-otomotif-dan-pariwisata-bersinergi-dibanjiri-ratusan-peserta-dan-banjir-doorprize",

      },
      {
        img: "	https://liputansatu.id/wp-content/uploads/2025/02/IMG_20250215_121419_copy_1200x675-800x450.jpg",
        title: "Jelang Ramadhan, Pantai Kelapa Tuban Salurkan 300 Paket Bantuan untuk Warga Kurang Mampu",
        date: "Feb 15, 2025",
        author: " Assayid Annazili",
        authorLink: "",
        subTitle:
          "Menjelang bulan suci Ramadhan, Kelompok Sadar Wisata (Pokdarwis) Pantai Kelapa, yang berlokasi di Kelurahan Panyuran, Kecamatan Palang, kembali menggelar kegiatan sosial dengan menyalurkan bantuan kepada masyarakat yang membutuhkan. Sebanyak 300 paket bantuan sosial (bansos) dibagikan kepada anak yatim dan warga kurang mampu di sekitar kawasan Pantai Kelapa, Sabtu (15/02/25).",
        postLink: "https://liputansatu.id/jelang-ramadhan-pantai-kelapa-tuban-salurkan-300-paket-bantuan-untuk-warga-kurang-mampu/",

      },

      {
        img: "images/blog1.jpg",
        title: "Raih Penghargaan Terbaik EJTA 2023",
        date: "Oct 31, 2023",
        author: "Pokdawis Pantai Kelapa",
        authorLink: "",
        subTitle:
          "Segala puji syukur kepada Tuhan yang maha Esa, diawali dari niat untuk meningkatkan ekonomi dan manfaat kepada masyarakat sampai dapat membawa nama harum KOTA TUBAN… Pantai Kelapa meraih penghargaan East Java Tourism Award (EJTA) 2023 TERBAIK kategori Wisata Alam Buatan Pengelola Kelompok Masyarakat.",
        postLink: "/post/post_details",
        truncateText: 'Raih Penghargaan Terbaik...'
      },
      // {
      //   img: "images/blog2.jpg",
      //   title: "Pantai Kelapa di Detikcom",
      //   date: "Aug 22, 2020",
      //   author: "Detik.com",
      //   authorLink: "",
      //   subTitle:
      //     "Tuban di Jawa Timur yang dikenal sebagai kota santri banyak memiliki kawasan wisata religi. Namun rupanya tak itu saja. Tuban juga memiliki wisata pantai yang asri dan eksotis, yakni Pantai Kelapa. Destinasi wisata ini telah cukup lama dikenal oleh masyarakat sekitar Tuban.",
      //   postLink: "/post/post_details",
      //   truncateText: 'Pantai Kelapa di Detikcom...'
      // },
    ];

  const brandData = [
    {
      bg: "orange",
      img: "images/client1.png",
    },
  ];
  const videoBlockData = {
    "videoSrc": 'https://www.youtube.com/embed/6rsq1jodaMU?si=hvQ2lSabop7PFfzW',
  }

  const mapLocationURL =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63375.21794269388!2d112.089161!3d-6.89645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77bdc4b920f3cd%3A0x97bbfe219b26599!2sPantai%20Kelapa%20Tuban!5e0!3m2!1sid!2sid!4v1710796156138!5m2!1sid!2sid";



  const handelClick = () => {
    setIframeSrc(`${videoBlockData.videoSrc}`);
    setToggle(!toggle);
  };
  useEffect(() => {
    // Auto buka modal setelah page load
    setToggle(true);
  }, []);
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };
  return (
    <>
      <Hero data={heroData} />
      <Iconbox data={iconboxData} />
      <About data={aboutData} />
      <PostWrapper data={latestPosts} />
      <Department />
      {/* <Appointment /> */}
      <About4 data={aboutData2} data1={specialistData} />
      {/* <SpecialistsSlider data={specialistData} /> */}
      <hr />
      <MasonryGallery />
      {/* <BeforeAfter data={beforeAfterData} /> */}
      <TestimonialSlider data={testimonialData} />
      <Funfact />
      {/* <Analytics mode={'production'} />; */}
      <PriceSlider data={priceData} />
      <Accordion data={faqData} />
      <Newsletter data={newsletterData} />


      {/* <BrandSlider data={brandData} /> */}
      <Contact />
      <LocationInMap data={mapLocationURL} />
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  );
};

export default Home;