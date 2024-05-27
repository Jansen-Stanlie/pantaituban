import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Post from './Post';

const PostWrapper = ({ data }) => {
  const post = data.slice(0, 3);
  return (
    <section id="blog">
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading title="Latest News"
        subTitle="Stay informed with the latest updates, announcements, and happenings at Pantai Tuban.
        <br> Your source for all things new and exciting." />
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
