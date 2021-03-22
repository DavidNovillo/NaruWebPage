import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

function InstagramPosts() {
  return (
    <div className="instagram-section">
      <InstagramFeed
        token="IGQVJXY0x2SjlISTFJdkoyZAHlmaVRlLXNXUGFWbXFNV0FybXB1ZAThUTndFeFI2OUVtNWp5b1hJc0NUNjlBUFhzcXdfWE1NM3lEZA3RzR0J3ZAWZAXa3ZAIS1BRbnhwMTBqdUxtQ056SU9reENtb2lfTWpjVwZDZD"
        counter="12"
      />
    </div>
  );
}

export default InstagramPosts;
