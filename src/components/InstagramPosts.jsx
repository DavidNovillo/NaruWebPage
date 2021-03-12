import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

function InstagramPosts() {
  return (
    <div className="instagram-section">
      <InstagramFeed
        token="IGQVJYOC1LY3E3UlhoVmp3bHBzQlFHVll4dFZA2SWw2dDF4Q1dQeENici1lMFRaLWVPV1FjanRDcU9zWlZA1aExfTDNfeVNYNUFLS2lTRm9WQnphRkhMTU1FcThtX1daUjBfeEFKTFFOZAXhwY0RUUEE4NQZDZD"
        counter="12"
      />
    </div>
  );
}

export default InstagramPosts;
