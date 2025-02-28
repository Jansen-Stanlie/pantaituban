import React, { useState } from "react";
import { Link } from "react-router-dom";
import Post4 from "./Post4";

const PostWrapper4 = ({ data }) => {
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = data.slice(startIndex, startIndex + postsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="st-content">
      <div className="st-height-b100 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          {/* Main Post Section */}
          <div className="col-lg-8">
            <div className="row">
              {currentPosts.map((elements, index) => (
                <Post4 {...elements} key={index} />
              ))}

              {/* Pagination */}
              <div className="col-lg-12">
                <ul className="pagination st-post-pagination">
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <Link className="page-link" to="#" onClick={handlePrev}>
                      Prev
                    </Link>
                  </li>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                      <Link className="page-link" to="#" onClick={() => setCurrentPage(index + 1)}>
                        {index + 1}
                      </Link>
                    </li>
                  ))}

                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <Link className="page-link" to="#" onClick={handleNext}>
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="col-lg-4">
            <div className="st-height-b0 st-height-lg-b40" />

            {/* Archives Section */}
            <div className="st-widget st-sidebar-widget">
              <h3 className="st-widget-title">Archives</h3>
              <ul className="st-widget-list">
                {["March 2020", "May 2020", "June 2020", "August 2020", "September 2020", "October 2020"].map((month, index) => (
                  <li key={index}>
                    <Link to="#">{month}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Section */}
            <div className="st-height-b30 st-height-lg-b30" />
            <div className="st-widget st-sidebar-widget">
              <h3 className="st-widget-title">Recent Posts</h3>
              <ul className="st-post-widget-list st-mp0">
                {data.slice(0, 3).map((elements, index) => (
                  <li key={index}>
                    <div className="st-post st-style1">
                      <Link to={elements.postLink} className="st-post-thumb st-zoom">
                        <img src={elements.img} alt={elements.title} className="st-zoom-in" />
                      </Link>
                      <div className="st-post-info">
                        <h2 className="st-post-title">
                          <Link to={elements.postLink}>{elements.title}</Link>
                        </h2>
                        <div className="st-post-date">{elements.date}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags Section */}
            <div className="st-height-b30 st-height-lg-b30" />
            <div className="st-widget st-sidebar-widget">
              <h3 className="st-widget-title">Popular Tags</h3>
              <div className="st-tagcloud">
                {["Gallery", "Quote", "Video", "Link", "Ipsum", "Environment", "Corporate"].map((tag, index) => (
                  <Link key={index} to="#" className="st-tag">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80" />
    </div>
  );
};

export default PostWrapper4;
