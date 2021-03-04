import axios from "axios";

class GetPosts {
  getInsPosts() {
    return axios.get("https://www.instagram.com/narucrossfit");
  }
}

export default new GetPosts();
