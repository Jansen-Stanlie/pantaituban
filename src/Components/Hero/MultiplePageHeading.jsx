import React from 'react'
import parser from 'html-react-parser'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';

const MultiplePageHeading = ({ bgImg, title, subTitle }) => {
  const today = new Date();
  const formattedDate = format(today, 'MMMM do, yyyy'); // Example: July 28, 2024

  return (
    <div
      className="st-page-heading st-dynamic-bg"
      style={{ backgroundImage: `url('/images/hero-bg2.jpg')` }}
    >
      <div className="container">
        <div className="st-page-heading-in text-center">
          <h4>
            <Link to="/" className="st-back-to-home">
              <Icon icon="ph:arrow-left-bold" />
              Back To Home
            </Link>
          </h4>
          <h1 className="st-page-heading-title">
            News Terbaru Pantai Kelapa Tuban
          </h1>
          <div className="st-post-label">
            <span>
              By <Link>Pok Darwis Team</Link>
            </span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultiplePageHeading
