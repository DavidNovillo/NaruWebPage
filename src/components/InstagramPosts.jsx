import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

function InstagramPosts() {
  return (
    <div className="instagram-section">
      <InstagramFeed
        token="IGQVJXbDVJRmZA2dFhZAaDllY1lESTBrbEVCVWZAMeXhIb0Fkb2NZAQzlfaVBKRURmRWRhcUFTWkJRem5ITnlKWTA3V2R3TDVxNmtTSEdya21lYThxZAGVhTVlVWmdvTXp6X1AyU2xxYUVlZAzRhZAFBaNC15MAZDZD"
        counter="12"
      />
    </div>
  );
}

export default InstagramPosts;
