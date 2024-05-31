import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Post from './Post';

const PostWrapper = ({ data }) => {
  const post = data.slice(0, 3);
  return (
    <section id="blog">
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading title="Berita Terkini dari Pantai Tuban"
        subTitle="Jangan sampai ketinggalan informasi terbaru tentang acara spesial, promo menarik, dan berita penting lainnya dari Pantai Tuban. 
        <br> Semuanya ada di sini! " />
      <div className="container">
        <div className="row">
          {
            post.map((element, index) => (
              <Post {...element} key={index} />
            ))
          }
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  )
}

export default PostWrapper;
