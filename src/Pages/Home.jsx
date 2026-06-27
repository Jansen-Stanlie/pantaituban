import React, { useEffect, useState, useMemo, useCallback } from "react";
import Hero from "../Components/Hero/Hero";
import LocationInMap from "../Components/Map/LocationInMap";
import Contact from "../Components/Contact/Contact";
import Department from "../Components/Department/Department";
// import Appointment from "../Components/Appointment/Appointment";
import About from "../Components/About/About";
import About4 from "../Components/About/About4";
import Iconbox from "../Components/Iconbox/Iconbox";
import PostWrapper from "../Components/Post/PostWrapper";
// import SpecialistsSlider from "../Components/Slider/SpecialistsSlider";
import TestimonialSlider from "../Components/Slider/TestimonialSlider";
// import BrandSlider from "../Components/Slider/BrandSlider";
import Newsletter from "../Components/Newsletter/Newsletter";
import Accordion from "../Components/Accordion/Accordion";
import PriceSlider from "../Components/Slider/PriceSlider";
import Funfact from "../Components/Funfact/Funfact";
// import BeforeAfter from "../Components/BeforeAfter/BeforeAfter";
import MasonryGallery from "../Components/Gallery/Gallery";
import { useTranslation } from "react-i18next";
import UpcomingEvents from "../Components/UpcomingEvents/UpcomingEvents";
// ✅ pakai modal carousel yang support VIDEO + IMAGE
import MediaCarouselModal from "../Components/VideoModal/MediaCarouselModal";
import EventCalendar from "../Components/EventCalendar/EventCalendar";
// --- helpers ---
const safeJson = async (res) => {
  try {
    return await res.json();
  } catch {
    return null;
  }
};

const Home = () => {
  const { t } = useTranslation();
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  // posts
  const [latestPosts, setLatestPosts] = useState([]);

  // featured media carousel
  const [topMedia, setTopMedia] = useState([]);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [openMediaModal, setOpenMediaModal] = useState(false);

  // -------- fetch posts --------
  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const res = await fetch(
          "https://pantaikelapa-panel.my.id/api/pages/post/public?page=1&limit=3&sortBy=publishedAt&order=desc&isPublished=true&isDeleted=false"
        );
        const json = await safeJson(res);

        const formattedPosts = (json?.data?.posts || []).map((post) => ({
          img: post.img,
          title: post.title,
          date: post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
            : "",
          author: post.author?.name || "Unknown",
          authorLink: "",
          subTitle: post.subTitle,
          postLink: post.postLink,
          truncateText:
            post.truncateText || (post.subTitle ? post.subTitle.slice(0, 80) + "..." : ""),
        }));

        setLatestPosts(formattedPosts);
      } catch (error) {
        console.error("❌ Error fetching posts:", error);
      }
    };
    const fetchEvents = async () => {
      try {
        const res = await fetch(

          "https://pantaikelapa-panel.my.id/api/apps/calendar/public/events?upcoming=true&limit=3"
        );

        if (!res.ok) {

          throw new Error(
            "Cannot fetch event"
          );
        }

        const json = await safeJson(res);

        console.log(
          "EVENTS",
          json
        );

        setUpcomingEvents(
          json?.data || []
        );
      }
      catch (err) {
        console.error(
          err
        );
      }

    }
    fetchEvents();
    fetchLatestPosts();
  }, []);

  // -------- fetch featured media (VIDEO + IMAGE) --------
  useEffect(() => {
    const fetchFeaturedMedia = async () => {
      try {
        // ✅ production endpoint
        // const res = await fetch("https://pantaikelapa-panel.my.id/api/pages/playback/public");
        const res = await fetch("http://localhost:3000/api/pages/playback/public");

        const json = await safeJson(res);

        console.log("✅ featured media:", json);

        const topVideo = json?.data?.top?.VIDEO || [];
        const topImage = json?.data?.top?.IMAGE || [];

        // merge + stable sort
        const merged = [...topVideo, ...topImage].sort((a, b) => {
          const so = (a?.sortOrder ?? 0) - (b?.sortOrder ?? 0);
          if (so !== 0) return so;
          return new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0);
        });

        setTopMedia(merged);

        // ✅ default pilih video pertama biar autoplay jalan kalau ada
        const firstVideoIndex = merged.findIndex((x) => x?.type === "VIDEO");
        setActiveMediaIndex(firstVideoIndex >= 0 ? firstVideoIndex : 0);

        // ✅ auto open modal kalau ada konten
        if (merged.length > 0) setOpenMediaModal(true);
      } catch (err) {
        console.error("❌ Error fetching featured media:", err);
      }
    };

    fetchFeaturedMedia();
  }, []);

  const activeMedia = useMemo(
    () => topMedia?.[activeMediaIndex] || null,
    [topMedia, activeMediaIndex]
  );

  // optional: kalau mau tombol manual open
  const openCarousel = useCallback(() => {
    if (topMedia.length > 0) setOpenMediaModal(true);
  }, [topMedia.length]);

  // ------------------- UI DATA -------------------
  const heroData = [
    {
      title: t("Hero.title11"),
      subTitle: t("Hero.subTitle1"),
      bgImg: "/images/garam/bg-garam3.jpg",
    },
    {
      title: t("Hero.title11"),
      subTitle: t("Hero.subTitle1"),
      bgImg: "/images/hero-bg.jpg",
    },
    {
      title: t("Hero.title2"),
      subTitle: t("Hero.subTitle2"),
      bgImg: "/images/hero-bg3.jpg",
    },
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
    textLine: [{ text: t("aboutData2.textline.text1") }, { text: t("aboutData2.textline.text2") }],
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
      { day: t("aboutData.timeTable.day1"), startTime: "8:00", endTime: "5:00" },
      { day: t("aboutData.timeTable.day2"), startTime: "8:00", endTime: "5:00" },
      { day: t("aboutData.timeTable.day3"), startTime: "8:00", endTime: "5:00" },
      { day: t("aboutData.timeTable.day4"), startTime: "8:00", endTime: "5:00" },
      { day: t("aboutData.timeTable.day5"), startTime: "8:00", endTime: "5:00" },
      { day: t("aboutData.timeTable.day6"), startTime: "8:00", endTime: "5:00" },
      { day: t("aboutData.timeTable.day7"), startTime: "8:00", endTime: "5:00" },
    ],
    contact: "(+62) 8574 5410 187",
  };

  const specialistData = [
    { img: "images/Pengurus_0000.jpg", name: "Muhasan, SH.", designation: t("specialist.title1"), authorLink: "/doctor-profile" },
    { img: "images/Pengurus_0001.jpg", name: "Mokhamad Khanafi", designation: t("specialist.title2"), authorLink: "/doctor-profile" },
    { img: "images/Pengurus_0003.jpg", name: "Heri Poernomo, SE.", designation: t("specialist.title3"), authorLink: "/doctor-profile" },
    { img: "images/Pengurus_0002.jpg", name: "Muhammad Ludfi, A.Md.", designation: t("specialist.title4"), authorLink: "/doctor-profile" },
    { img: "images/Pengurus_0006.jpg", name: "Ahmad Rofiq, ST.", designation: t("specialist.title5"), authorLink: "/doctor-profile" },
    { img: "images/Pengurus_0004.jpg", name: "Muhammad Hariyono", designation: t("specialist.title6"), authorLink: "/doctor-profile" },
    { img: "images/Pengurus_0005.jpg", name: "Sujito", designation: t("specialist.title7"), authorLink: "/doctor-profile" },
    { img: "images/Pengurus_0007.jpg", name: "Ahmad Ikhwan", designation: t("specialist.title8"), authorLink: "/doctor-profile" },
    { img: "images/Pengurus_0008.jpg", name: "Zaenal Abidin", designation: t("specialist.title9"), authorLink: "/doctor-profile" },
  ];

  const testimonialData = [
    { img: "images/avatar2.png", name: "David Bayu Nur Fauzi", designation: "Content Creator", subTitle: t("Testimonial.user.user1Comment") },
    { img: "images/avatar3.png", name: "D. Ayu Puspita .A", designation: "Travel Blogger", subTitle: t("Testimonial.user.user2Comment") },
    { img: "images/avatar4.png", name: "Yan Ardi Abdul Hakim", designation: "Travel Blogger", subTitle: t("Testimonial.user.user3Comment") },
    { img: "images/avatar5.png", name: "Nafisa", designation: "Family Vacationer", subTitle: t("Testimonial.user.user4Comment") },
  ];

  const priceData = [
    { image: "images/template wahana/Spot_foto.png", price: "$199", title: "Spot Foto Plan", featureList: [] },
    { image: "images/template wahana/Berkuda.png", price: "$199", title: "Berkuda Plan", featureList: [] },
    { image: "images/template wahana/Atv.png", price: "$299", title: "ATV Plan", featureList: [] },
    { image: "images/template wahana/FlyingFox.png", price: "$399", title: "Flying Fox Plan", featureList: [] },
    { image: "images/template wahana/Swimming.png", price: "$499", title: "Swimming Pool Plan", featureList: [] },
    { image: "images/template wahana/Terapi.png", price: "$499", title: "Terapi Plan", featureList: [] },
    { image: "images/template wahana/Tunnel.png", price: "$499", title: "Tunnel Plan", featureList: [] },
    { image: "images/template wahana/Seafood.png", price: "$499", title: "Seafood Plan", featureList: [] },
    { image: "images/template wahana/mobil-listrik.png", price: "$499", title: "Mobil Listrik Plan", featureList: [] },
    { image: "images/template wahana/panggung-gembira.png", price: "$499", title: "Panggung Gembira Plan", featureList: [] },
    { image: "images/template wahana/Cafe.png", price: "$499", title: "Cafe Plan", featureList: [] },
  ];

  const faqData = {
    title: t("faq.sectionTitle"),
    img: "images/faq-img.png",
    bgImg: "shape/faq-bg.svg",
    faqItems: [
      { title: t("faq.items.item1.title"), content: t("faq.items.item1.desc") },
      { title: t("faq.items.item2.title"), content: t("faq.items.item2.desc") },
      { title: t("faq.items.item3.title"), content: t("faq.items.item3.desc") },
      { title: t("faq.items.item4.title"), content: t("faq.items.item4.desc") },
    ],
  };

  const newsletterData = {
    bgImg: "images/news-letter-bg.png",
    contact: "(+62) 8574 5410 187",
  };

  const mapLocationURL =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63375.21794269388!2d112.089161!3d-6.89645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77bdc4b920f3cd%3A0x97bbfe219b26599!2sPantai%20Kelapa%20Tuban!5e0!3m2!1sid!2sid!4v1710796156138!5m2!1sid!2sid";

  return (
    <>
      <Hero data={heroData} />
      <UpcomingEvents
        data={upcomingEvents}
      />
      <EventCalendar data={upcomingEvents} />
      <Iconbox data={iconboxData} />
      <About data={aboutData} />
      <PostWrapper data={latestPosts} />
      <Department />
      <About4 data={aboutData2} data1={specialistData} />
      <hr />
      <MasonryGallery />
      <TestimonialSlider data={testimonialData} />
      <Funfact />
      <PriceSlider data={priceData} />
      <Accordion data={faqData} />
      <Newsletter data={newsletterData} />
      <Contact />
      <LocationInMap data={mapLocationURL} />

      {/* ✅ Modal Carousel (VIDEO + IMAGE) */}
      <MediaCarouselModal
        isTrue={openMediaModal}
        items={topMedia}
        activeIndex={activeMediaIndex}
        onChangeIndex={setActiveMediaIndex}
        handelClose={() => setOpenMediaModal(false)}
      />

      {/* optional debug */}
      {/* <pre style={{ position: "fixed", bottom: 0, left: 0, zIndex: 9999, background: "#000", color: "#0f0" }}>
        active: {JSON.stringify(activeMedia, null, 2)}
      </pre> */}
    </>
  );
};

export default Home;
