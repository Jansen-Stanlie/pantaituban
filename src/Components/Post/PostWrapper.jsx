import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Post from './Post';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const PostWrapper = ({ data }) => {
  const post = data.slice(0, 3);
  return (
    <section id="blog">
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading title="Berita Terkini dari Pantai Tuban"
        subTitle={`Jangan sampai ketinggalan informasi terbaru tentang acara spesial, promo menarik, dan berita penting lainnya dari Pantai Tuban. 
        <br> Semuanya ada di sini!`} />
      <div className="container">
        <div className="row">
          {
            post.map((element, index) => (
              <Post {...element} key={index} />
            ))
          }
        </div>
        {data.length > 1 && (
          <>
            <div className="st-height-b20 st-height-lg-b20" />
            <Link to="/post/postrecap" className="st-btn st-style1 st-color1 st-size-medium st-flex-center st-gap-x-5" style={{ marginLeft: 0 }}>
              <span>Lihat Lebih banyak</span>
              <Icon icon="bi:arrow-right" />
            </Link>
          </>

        )}
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  )
}


export default PostWrapper;
