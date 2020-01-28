import axios from "axios";

export default {
  getListOfComics: async () => {
    let response = await axios.get("/api/marvel/comics");
    let data = await response.data;

    return data;
  }
};
