import React, { useState } from "react";
import GetPosts from "../GetPosts";


function InstagramPosts() {
  const [postArray, setPostArray] = useState({});
  function GetFeed() {
    GetPosts.getInsPosts()
      .then((res) => {
        setPostArray(res);
        console.log(postArray);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  return (
    <div>
      <h1 onClick={GetFeed}>Instagram posts</h1>
    </div>
  );
}

export default InstagramPosts;
