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
    img: "https://www.bloktuban.com/image/posts/2025/02/w5c8rbbS4eRb1fIrhy6zVaKgLucMBbocBZIICSFu.jpg",
    title: "Kisah Haru Penerima Bantuan Pokdarwis Pantai Kelapa Tuban: “Alhamdulillah, Sangat Membantu”",
    date: "Feb 15, 2025",
    author: " Ali Imron",
    authorLink: "",
    subTitle:
      "blokTuban.com - Kelompok Sadar Wisata (Pokdarwis) Pantai Kelapa kembali menunjukkan kepeduliannya terhadap masyarakat sekitar dengan menyalurkan bantuan sosial kepada anak yatim dan warga kurang mampu di sekitar kawasan Pantai Kelapa. Kegiatan ini berlangsung pagi ini dan merupakan bagian dari program Corporate Social Responsibility (CSR) Pantai Kelapa.",
    postLink: "https://www.bloktuban.com/2025/02/15/kisah-haru-penerima-bantuan-pokdarwis-pantai-kelapa-tuban-alhamdulillah-sangat-membantu",

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
