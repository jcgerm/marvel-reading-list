import axios from "axios";

export default {
  getListOfComics: async () => {
    let response = await axios.get("/api/marvel/characters");
    let data = await response.data;

    return data;
  },

  getListOfComicsForCharacters: async (searchString: string) => {
    let response = await axios.get(
      `/api/marvel/comics/characters/${searchString}`
    );
    let data = await response.data;

    return data;
  }
};
