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

const heroData = {
  bgImg: "images/hero-bg.jpg",
  bgShape: "shape/hero-shape.png",
  sliderImages: [
    {
      img: "images/hero-img.png",
    },
    {
      img: "images/hero-img1.png",
    },
    {
      img: "images/hero-img2.png",
    },
    {
      img: "images/hero-img.png",
    },
    {
      img: "images/hero-img1.png",
    },
    {
      img: "images/hero-img2.png",
    },
  ],
  title: [
    "Sun & Sand",
    "Ocean Waves",
    "Beach Paradise",
    "Coastal Adventure",
    "Seashore Serenity",
  ],
};

const iconboxData = [
  {
    bg: "blue", // A light blue to evoke the ocean
    icon: "icons/sun.svg", // Replace with an icon of a sun or palm tree
    title: "Endless Sunshine",
    subTitle:
      "Bask in the warm glow of the tropical sun on our pristine shores.",
  },
  {
    bg: "purple", // A vibrant blue-green reminiscent of tropical waters
    icon: "icons/surfboard.svg", // Replace with an icon of a surfboard or wave
    title: "Water Adventures",
    subTitle:
      "Dive into the crystal-clear waters for swimming, surfing, snorkeling, or kayaking.",
  },
  {
    bg: "red", // A warm yellow to represent the sand
    icon: "icons/cocktail.svg", // Replace with an icon of a cocktail, beach umbrella, or hammock
    subTitle: "Find Your Happy Place: It's waiting for you at the beach.",
    title: "Chill Beach Vibes",
  },
];
const aboutData2 = {
  imgSrc: `images/about2.png`,
  title: `Meet Pantai Tuban Team <span className="st-blue">Pokdarwis</span>`,
  textLine: [
    {
      text: ` Get to know the dedicated professionals who make Pantai Tuban a truly special destination. 
      Our team is passionate about creating unforgettable experiences for every guest.`,
    },
    {
      text: `We're more than just a team – we're a family`,
    },
  ],
};
const aboutData = {
  title: "Pantai Tuban: Your Gateway to Tranquil Bali Bliss",
  subTitle:
    "Relax, unwind, and reconnect with nature on the sun-kissed shores of Pantai Tuban.  Experience mesmerizing sunsets, vibrant beach culture, and a variety of watersports for the adventurer within.  Our beachside cafe and charming shops offer local delicacies and unique treasures to remember your visit.",

  avater: {
    img: "images/avatar1.png",
    name: "pokdarwis pantai kelapa",
    designation: "Contact person",
  },
  timeTable: [
    {
      day: "Monday",
      startTime: "8:00",
      endTime: "5:00",
    },
    {
      day: "Tuesday",
      startTime: "8:00",
      endTime: "5:00",
    },
    {
      day: "Wednesday",
      startTime: "8:00",
      endTime: "5:00",
    },
    {
      day: "Thursday",
      startTime: "8:00",
      endTime: "5:00",
    },
    {
      day: "Friday",
      startTime: "8:00",
      endTime: "5:00",
    },
    {
      day: "Saturday",
      startTime: "8:00",
      endTime: "5:00",
    },
    {
      day: "Sunday",
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
  }
];

const faqData = {
  title: "Your Beach FAQ - We've Got You Covered!",
  img: "images/faq-img.png",
  bgImg: "shape/faq-bg.svg",
  faqItems: [
    {
      title: "Are there lifeguards on duty at the beach?",
      content:
        "Yes, Pantai Tuban is patrolled by certified lifeguards from 9 AM to 5 PM daily. They are trained in first aid and water rescue.",
    },
    {
      title: "What water activities are available?",
      content:
        "Pantai Tuban offers a variety of water sports, including surfing, paddleboarding, kayaking, and snorkeling. Rentals are available on the beach.",
    },
    {
      title: "Can I bring my own food and drinks?",
      content:
        "Absolutely! You are welcome to bring your own food and drinks to Pantai Tuban. However, we also have a beachside cafe serving local dishes and refreshing beverages.",
    },
    {
      title: "Is the beach wheelchair accessible?",
      content:
        "Yes, Pantai Tuban is partially wheelchair accessible. There are ramps leading to the beach and designated wheelchair-friendly areas.",
    },
    {
      title: "Are there showers and changing rooms?",
      content:
        "Yes, we provide clean and well-maintained showers and changing rooms near the beach for your convenience.",
    },
  ],
};

const newsletterData = {
  bgImg: "images/news-letter-bg.png",
  contact: "(+62) 813 3027 0359",
};

const postData = [
  {
    img: "images/blog1.jpg",
    title: "Raih Penghargaan Terbaik EJTA 2023",
    date: "Oct 31, 2023",
    author: "Pokdawis Pantai Kelapa",
    authorLink: "",
    subTitle:
      "Segala puji syukur kepada Tuhan yang maha Esa, diawali dari niat untuk meningkatkan ekonomi dan manfaat kepada masyarakat sampai dapat membawa nama harum KOTA TUBAN… Pantai Kelapa meraih penghargaan East Java Tourism Award (EJTA) 2023 TERBAIK kategori Wisata Alam Buatan Pengelola Kelompok Masyarakat.",
    postLink: "/post/post_details",
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
  }
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
