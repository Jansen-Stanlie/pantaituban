import React from 'react'
import MultiplePageHeading from '../../Components/Hero/MultiplePageHeading'
import PostWrapper4 from '../../Components/Post/PostWrapper4'

const heroData = {
  bgImg: `/images/hero-bg6.jpg`,
  title: `Our Latest News`,
  subTitle: `Gate all update news here`
}

const postData = [
  {
    img: "/images/blog3.jpg",
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
    img: '/images/blog3.jpg',
    title: 'Pererat Silaturrahim dan Kolaborasi',
    date: 'Jul 24, 2024',
    author: 'Bangsa Online',
    authorLink: '',
    subTitle:
      "Ketua Komunitas TDA Jatim 1, Mustiko Adi Wibowo, mengatakan kegiatan ini sebenarnya rutin dilaksanakan oleh TDA di Wilayah Jatim 1. Di antaranya, diikuti TDA Kota Surabaya, Sidoarjo, Gresik, Lamongan, Tuban, Bojonegoro, dan Jombang.",
    postLink: 'https://bangsaonline.com/berita/134772/pererat-silaturrahim-dan-kolaborasi-tda-jatim-1-gelar-family-fun-camp-bersama-keluarga',
  },
  {
    img: '/images/blog3.jpg',
    title: 'Family Fun Camp di Pantai Kelapa Rekatkan Keluarga TDA Jatim',
    date: 'Jul 24, 2024',
    author: 'Jatim Pos',
    authorLink: '',
    subTitle:
      "JATIMPOS.CO/TUBAN – Family Fun Camp Pantai Kelapa Tuban sukses digelar Komunitas Pengusaha Tangan Di Atas (TDA) Jatim 1. Acara yang dimulai Sabtu hingga Minggu (20-21/7/2024) menjadi ajang silaturahim anggota. Hadir bersama keluarga acara semakin hangat dan meriah.",
    postLink: 'https://www.jatimpos.co/asal-tahu/14695-family-fun-camp-di-pantai-kelapa-rekatkan-keluarga-tda-jatim',
  },
  {
    img: '/images/blog3.jpg',
    title: 'TDA Jatim 1 Gelar Family Fun Camp Bersama Keluarga',
    date: 'Jul 21, 2024',
    author: 'tuban kab',
    authorLink: '',
    subTitle:
      "Tubankab - Komunitas Pengusaha Tangan Di Atas (TDA) Jatim 1 menggelar Family Fun Camp di lokasi Wisata Pantai Kelapa Tuban selama dua hari berturut-turut, mulai Sabtu-Minggu (20-21/07). Dalam kesempatan itu para pebisnis TDA juga mengajak keluarga mereka masing-masing agar acara semakin meriah.",
    postLink: 'https://tubankab.go.id/entry/tda-jatim-1-gelar-family-fun-camp-bersama-keluarga',
  },
  {
    img: '/images/blog3.jpg',
    title: 'TDA Jatim 1 Gelar Family Fun Camp Bersama Keluarga di Pantai Kelapa Tuban',
    date: 'Jul 21, 2024',
    author: 'Kim Rong Golawe',
    authorLink: '',
    subTitle:
      "KIM Ronggolawe – Komunitas Pengusaha Tangan Di Atas (TDA) Jatim 1 menggelar family fun camp di lokasi Wisata Pantai Kelapa Tuban selama dua hari berturut-turut mulai Sabtu-Minggu (20-21/07/2024). Dalam kesempatan itu para pebisnis TDA juga mengajak keluarga mereka masing-masing agar acara semakin meriah.",
    postLink: 'https://kimronggolawe.com/2024/07/tda-jatim-1-gelar-family-fun-camp-bersama-keluarga-di-pantai-kelapa-tuban/',
  },
  {
    img: "/images/blog1.jpg",
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
    img: "/images/blog2.jpg",
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

const PostPage = () => {
  return (
    <>
      <MultiplePageHeading {...heroData} />
      <PostWrapper4 data={postData} />
    </>
  )
}

export default PostPage
