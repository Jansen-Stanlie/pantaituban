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
    img: '/images/blog1.jpg',
    title: 'Raih Penghargaan Terbaik EJTA 2023',
    date: 'Aug 23, 2020',
    author: 'Albert Brian',
    authorLink: '',
    subTitle:
      "Segala puji syukur kepada Tuhan yang maha Esa, diawali dari niat untuk meningkatkan ekonomi dan manfaat kepada masyarakat sampai dapat membawa nama harum KOTA TUBAN… Pantai Kelapa meraih penghargaan East Java Tourism Award (EJTA) 2023 TERBAIK kategori Wisata Alam Buatan Pengelola Kelompok Masyarakat.",
    postLink: 'post_details',
  },
  {
    img: '/images/blog2.jpg',
    title: 'Pantai Kelapa di Detikcom',
    date: 'Aug 22, 2020',
    author: 'William Juarez',
    authorLink: '',
    subTitle:
      "Tuban di Jawa Timur yang dikenal sebagai kota santri banyak memiliki kawasan wisata religi. Namun rupanya tak itu saja. Tuban juga memiliki wisata pantai yang asri dan eksotis, yakni Pantai Kelapa. Destinasi wisata ini telah cukup lama dikenal oleh masyarakat sekitar Tuban.",
    postLink: 'post_details',
  },
  {
    img: '/images/blog3.jpg',
    title: 'Child’s first hospital visit',
    date: 'Aug 21, 2020',
    author: 'Jamse Lewis',
    authorLink: '',
    subTitle:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the industry's standard dummy text.",
    postLink: 'post_details',
  },
  {
    img: '/images/blog4.jpg',
    title: 'Child’s first hospital visit',
    date: 'Aug 21, 2020',
    author: 'Jamse Lewis',
    authorLink: '',
    subTitle:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the industry's standard dummy text.",
    postLink: 'post_details',
  },
  {
    img: '/images/blog5.jpg',
    title: 'Working in emergency medicine',
    date: 'Aug 23, 2020',
    author: 'Albert Brian',
    authorLink: '',
    subTitle:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the industry's standard dummy text.",
    postLink: 'post_details',
  },
  {
    img: '/images/blog6.jpg',
    title: 'Individual treatment & assistance',
    date: 'Aug 22, 2020',
    author: 'William Juarez',
    authorLink: '',
    subTitle:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the industry's standard dummy text.",
    postLink: 'post_details',
  },
  {
    img: '/images/blog7.jpg',
    title: 'Child’s first hospital visit',
    date: 'Aug 21, 2020',
    author: 'Jamse Lewis',
    authorLink: '',
    subTitle:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the industry's standard dummy text.",
    postLink: 'post_details',
  },
  {
    img: '/images/blog8.jpg',
    title: 'Child’s first hospital visit',
    date: 'Aug 21, 2020',
    author: 'Jamse Lewis',
    authorLink: '',
    subTitle:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the industry's standard dummy text.",
    postLink: 'post_details',
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
