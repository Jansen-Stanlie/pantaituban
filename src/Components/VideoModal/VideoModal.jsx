
const VideoModal = ({ isTrue, iframeSrc, handelClose }) => {
  // Add autoplay=1 if modal is active
  const updatedSrc = isTrue ? `${iframeSrc}${iframeSrc.includes('?') ? '&' : '?'}autoplay=1` : iframeSrc;
  console.log(updatedSrc);
  return (
    <div className={`st-video-popup ${isTrue ? "active" : ""}`}>
      <div className="st-video-popup-overlay"></div>
      <div className="st-video-popup-content">
        <div className="st-video-popup-layer"></div>
        <div className="st-video-popup-container">
          <div className="st-video-popup-align">
            <div className="st-video-popup-close" onClick={handelClose}></div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="Embedded Content"
                className="embed-responsive-item"
                src={updatedSrc}
                allow="autoplay"
              />
            </div>
          </div>
          <div className="st-video-popup-close" onClick={handelClose}></div>
        </div>
      </div>
    </div>
  );
}


export default VideoModal;
