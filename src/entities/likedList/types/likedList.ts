import { IMovieRDO } from "../../movie/movie.rdo";

export interface LikedListState {
  likedList: IMovieRDO[];
  addItem: (filmData: IMovieRDO) => void;
  removeItem: (id: string) => void;
  hasId: (id: string) => boolean;
}
