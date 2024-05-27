import React from 'react';

const Preloader = ({ varient }) => {
  return (
    <div className={`st-perloader ${varient ? varient : ""}`}>
      <div className="loader-container">
        <img src="/images/Ikon PK Warna.png" alt="Loader Image" className="loader-image" />
        <div className="loader-text">Pantai Tuban</div>
      </div>
    </div>
  );
}

export default Preloader
