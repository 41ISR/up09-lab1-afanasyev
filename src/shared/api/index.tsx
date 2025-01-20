import axios from "axios";
import { IMovieRDO } from "../../entities/movie/movie.rdo";

const API_KEY = "505480d7";

const OMDBInstance = axios.create({ baseURL: "http://www.omdbapi.com/" });

export const OMDBApi = {
  getFilm: async (id: string) => {
    const res = await OMDBInstance.get<IMovieRDO>("", {
      params: {
        apikey: API_KEY,
        i: id,
      },
    });
    return res.data;
  },
  searchByText: async (text: string) => {
    const res = await OMDBInstance.get<{Search : IMovieRDO[]}>("", {
      params: {
        apikey: API_KEY,
        s: text,
      },
    });
    return res.data.Search;
  }
};
