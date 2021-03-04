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
    <div className="galeria-section">
      <Header />
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
      />
      {/* <InstagramPosts /> */}
    </div>
  );
}

export default Galeria;
