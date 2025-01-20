import React from "react";
import App from "../app/App";
import { useLikedList } from "../entities/likedList/store/likedList";
import FilmCard from "../shared/FilmCard";
import { IMovieRDO } from "../entities/movie/movie.rdo";

const Liked: React.FC = () => {
  const { likedList } = useLikedList();
  return (
    <App>
      <div className="liked-page container">
        <h1 className="liked-page__heading">Список лайкнутых</h1>
        <div className="films-wrapper">
          {likedList &&
            likedList.map((filmData : IMovieRDO) => (
              <FilmCard key={filmData.imdbID} filmData={filmData} />
            ))}
        </div>
      </div>
    </App>
  );
};

export default Liked;
