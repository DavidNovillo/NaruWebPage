import React from "react";
import Header from "./Header";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import InstagramPosts from "./InstagramPosts";

function Galeria() {
  const images = Array.from(Array(25).keys());

  images.forEach((item, i, image) => {
    image[i] = {
      original: `https://ik.imagekit.io/narucrossfit2021/Galeria/tr:w-800/foto${item +
        1}.jpg`,
      thumbnail: `https://ik.imagekit.io/narucrossfit2021/Galeria/tr:w-350/foto${item +
        1}.jpg`,
    };
  });

  return (
    <div>
      <div className="galeria-section">
        <div className="blue-gradient">
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
      </div>
      <InstagramPosts />
    </div>
  );
}

export default Galeria;
