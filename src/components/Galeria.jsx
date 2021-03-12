import React from "react";
import Header from "./Header";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import InstagramPosts from "./InstagramPosts";

function Galeria() {
  const images = [
    {
      original: "/images/instalacion1.jpg",
      thumbnail: "/images/instalacion1.jpg",
    },
    {
      original: "/images/instalacion2.jpg",
      thumbnail: "/images/instalacion2.jpg",
    },
    {
      original: "/images/instalacion3.jpg",
      thumbnail: "/images/instalacion3.jpg",
    },
  ];
  return (
    <div>
      <div className="galeria-section">
        <Header />
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
        />
        <div
          class="btwb_webwidget"
          data-type="wods"
          data-sections="main"
          data-track_ids="362333,460282"
          data-activity_length="0"
          data-leaderboard_length="0"
          data-days="0"
        ></div>
      </div>
      <InstagramPosts />
    </div>
  );
}

export default Galeria;
