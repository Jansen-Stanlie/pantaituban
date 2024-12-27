import React from "react";
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
const heroData = [
  {
    title: "Ciptakan Momen Tak Terlupakan Bersama Keluarga. <br /> di",
    subTitle: "Biarkan mentari dan ombak Pantai Tuban menyegarkan jiwa raga,sambil menciptakan kenangan indah bersama orang tersayang.",
    bgImg: '/images/hero-bg.jpg',
  },
  {
    title: "Ciptakan Momen Tak Terlupakan Bersama Keluarga. <br /> di",
    subTitle: "Biarkan mentari dan ombak Pantai Tuban menyegarkan jiwa raga,sambil menciptakan kenangan indah bersama orang tersayang.",
    bgImg: '/images/hero-bg3.jpg',


  }
];
const iconboxData = [
  {
    bg: "blue",
    icon: "icons/sun.svg",
    title: "Surga Mentari Menanti",
    subTitle: "Lepaskan penat, biarkan mentari tropis menyapa kulitmu di pantai pribadi.",
  },
  {
    bg: "purple",
    icon: "icons/surfboard.svg",
    title: "Taklukkan Ombak, Raih Sensasi",
    subTitle: "Arungi birunya samudra, ciptakan petualangan tak terlupakan.",
  },
  {
    bg: "red",
    icon: "icons/cocktail.svg",
    title: "Hidupkan Momen Bahagia",
    subTitle: "Nikmati setiap detik di pantai impian, temukan definisi liburan sesungguhnya.",
  },
];
const aboutData2 = {
  imgSrc: `images/about2.png`,
  title: `Temui Tim Pantai <span className="st-blue">Pokdarwis</span> Pantai Tuban: Pahlawan di Balik Pesona`,
  textLine: [
    {
      text: ` Bertemu dengan para profesional berdedikasi yang menjadikan Pantai Kelapa Tuban destinasi tak terlupakan.
      Tim kami penuh semangat menciptakan pengalaman luar biasa bagi setiap tamu.`,
    },
    {
      text: `Lebih dari Sekadar Tim, Kami adalah Keluarga`,
    },
  ],
};
const aboutData = {
  title: "Pantai Tuban: Surga Tersembunyi di Pulau Jawa",
  subTitle:
    "Pantai Kelapa Tuban jawa timur sudah menjadi ikon wisata terbaik di jawa timur. Lokasi destinasi wisata yang menyuguhkan pemandangan luar biasa ini cukup mudah ditemukan. Beralamat di Jalan Tuban – Gresik kilometer 1-2, Dusun Kepoh, Kelurahan Panyuran, Kecamatan Palang, Tuban, Jawa Timur.",

  avater: {
    img: "images/avatar1.png",
    name: "pokdarwis pantai kelapa",
    designation: "Contact person",
  },
  timeTable: [
    {
      day: "Senin",
      startTime: "8:00",
      endTime: "5:00",
    },
    {
      day: "Selasa",
      startTime: "8:00",
      endTime: "5:00",
    },
    {
      day: "Rabu",
      startTime: "8:00",
      endTime: "5:00",
    },
    {
      day: "Kamis",
      startTime: "8:00",
      endTime: "5:00",
    },
    {
      day: "Jumat",
      startTime: "8:00",
      endTime: "5:00",
    },
    {
      day: "Sabtu",
      startTime: "8:00",
      endTime: "5:00",
    },
    {
      day: "Minggu",
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
    designation: "Ketua Pokdarwis",
    authorLink: "/doctor-profile",
  },
  {
    img: "images/Pengurus_0001.jpg",
    name: "Mokhamad Khanafi",
    designation: "Wakil Ketua Pokdarwis",
    authorLink: "/doctor-profile",
  }, {
    img: "images/Pengurus_0003.jpg",
    name: "Heri Poernomo, SE.",
    designation: "Sekretaris I Pokdarwis",
    authorLink: "/doctor-profile",
  },
  {
    img: "images/Pengurus_0002.jpg",
    name: "Muhammad Ludfi, A.Md.",
    designation: "Sekretaris II Pokdarwis",
    authorLink: "/doctor-profile",
  },
  {
    img: "images/Pengurus_0006.jpg",
    name: "Ahmad Rofiq, ST.",
    designation: "Bendahara I Pokdarwis",
    authorLink: "/doctor-profile",
  },
  {
    img: "images/Pengurus_0004.jpg",
    name: "Muhammad Hariyono",
    designation: "Bendahara II Pokdarwis",
    authorLink: "/doctor-profile",
  },
  {
    img: "images/Pengurus_0005.jpg",
    name: "Sujito",
    designation: "Divisi Hiburan",
    authorLink: "/doctor-profile",
  },

  {
    img: "images/Pengurus_0007.jpg",
    name: "Ahmad Ikhwan",
    designation: "Divisi Wahana",
    authorLink: "/doctor-profile",
  },
  {
    img: "images/Pengurus_0008.jpg",
    name: "Zaenal Abidin",
    designation: "Divisi Hiburan",
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
    subTitle:
      "saya habis dari sana tempatnya bersih, nyaman ada campingnya juga.",
  },
  {
    img: "images/avatar3.png",
    name: "D. Ayu Puspita .A",
    designation: "Travel Blogger",
    subTitle:
      "Pantainya adem, bisa di buat piknik bareng keluarga, wahananya lengkap dan seru, tiker masuknyapun murah juga",
  },
  {
    img: "images/avatar4.png",
    name: "Yan Ardi Abdul Hakim",
    designation: "Travel Blogger",
    subTitle:
      "banyak kenangan di pantai kelapa.... aku seru camping disana.",
  },
  {
    img: "images/avatar5.png",
    name: "Nafisa",
    designation: "Family Vacationer",
    subTitle:
      "tempatnya aestetik, cocok di buat nongkrong bareng besti.. campingnya juga seru bisa sambil menikmati senjanya.",
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
  title: "FAQ Pantai Tuban: Jawaban untuk Semua Pertanyaan Anda!",
  img: "images/faq-img.png",
  bgImg: "shape/faq-bg.svg",
  faqItems: [
    {
      title: "Apakah ada penjaga pantai yang bertugas?",
      content: "Tentu! Pantai Tuban memiliki penjaga pantai bersertifikat yang siap siaga dari pukul 9 pagi hingga 5 sore setiap hari. Mereka terlatih dalam pertolongan pertama dan penyelamatan air.",
    },
    {
      title: "Aktivitas air apa saja yang tersedia?",
      content: "Pantai Tuban menawarkan berbagai macam olahraga air seru,Perahu. Anda bisa menyewa peralatan langsung di pantai.",
    },
    {
      title: "Bolehkah saya membawa makanan dan minuman sendiri?",
      content: "Tentu saja! Anda dipersilakan membawa bekal makanan dan minuman sendiri ke Pantai Tuban. Namun, kami juga memiliki kafe tepi pantai yang menyajikan hidangan lokal lezat dan minuman menyegarkan.",
    },
    {
      title: "Apakah ada fasilitas kamar mandi dan ruang ganti?",
      content: "Ya, kami menyediakan kamar mandi dan ruang ganti yang bersih dan terawat di dekat pantai untuk kenyamanan Anda.",
    },
  ],
};

const newsletterData = {
  bgImg: "images/news-letter-bg.png",
  contact: "(+62) 8574 5410 187",
};

const postData =
  [{
    img: "images/blog3.jpg",
    title: "TDA Jatim 1 Gelar Family Fun Camp",
    date: "Jul 21, 2024",
    author: "nur syaifudin",
    authorLink: "",
    subTitle:
      "Komunitas Pengusaha Tangan Di Atas (TDA) Jatim 1 menggelar family fun camp di lokasi Wisata Pantai Kelapa Tuban selama dua hari berturut-turut mulai Sabtu-Minggu (20-21/7/2024). Dalam kesempatan itu para pebisnis TDA juga mengajak keluarga mereka masing-masing agar acara semakin meriah.",
    postLink: "https://harianbangsa.net/tda-jatim-1-gelar-family-fun-camp-bersama-keluarga-begini-tujuannya",
    truncateText: 'Child’s first hospital visit...'
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
  {
    img: "images/blog2.jpg",
    title: "Pantai Kelapa di Detikcom",
    date: "Aug 22, 2020",
    author: "Detik.com",
    authorLink: "",
    subTitle:
      "Tuban di Jawa Timur yang dikenal sebagai kota santri banyak memiliki kawasan wisata religi. Namun rupanya tak itu saja. Tuban juga memiliki wisata pantai yang asri dan eksotis, yakni Pantai Kelapa. Destinasi wisata ini telah cukup lama dikenal oleh masyarakat sekitar Tuban.",
    postLink: "/post/post_details",
    truncateText: 'Pantai Kelapa di Detikcom...'
  },
  ];

const brandData = [
  {
    bg: "orange",
    img: "images/client1.png",
  },
];

const mapLocationURL =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63375.21794269388!2d112.089161!3d-6.89645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77bdc4b920f3cd%3A0x97bbfe219b26599!2sPantai%20Kelapa%20Tuban!5e0!3m2!1sid!2sid!4v1710796156138!5m2!1sid!2sid";

const Home = () => {
  return (
    <>
      <Hero data={heroData} />
      <Iconbox data={iconboxData} />
      <About data={aboutData} />
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
      <PostWrapper data={postData} />
      {/* <BrandSlider data={brandData} /> */}
      <Contact />
      <LocationInMap data={mapLocationURL} />
    </>
  );
};

export default Home;
