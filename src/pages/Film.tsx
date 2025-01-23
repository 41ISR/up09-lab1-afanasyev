import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { OMDBApi } from "../shared/api";
import { IMovieRDO } from "../entities/movie/movie.rdo";
import App from "../app/App";

const Film: React.FC = () => {
  let params = useParams();
  const [filmData, setFilmData] = useState<IMovieRDO | null>(null);
  useEffect(() => {
    if (!params.id) {
      return;
    }
    OMDBApi.getFilm(params.id).then((data) => {
      setFilmData(data);
    });
  }, [params.id]);

  return (
    <App>
      <div className="film-page container">
        {filmData &&
          (() => {
            let { Title, Released, Genre, Runtime, imdbRating, Poster } = filmData;
            return (
              <>
                <img
                  src={
                    Poster == "N/A"
                      ? "/src/shared/assets/empty-poster.png"
                      : Poster
                  }
                  alt={`${Title} poster`}
                  className="film-page__poster"
                />
                <div className="film-page__details">
                  <h2 className="film-page__title">{Title}</h2>
                    <p className="film-page__info">Год выпуска: {Released}</p>
                    <p className="film-page__info">Жанр: {Genre}</p>
                    <p className="film-page__info">Хронометраж: {Runtime}</p>
                    <p className="film-page__info">IMDB Рейтинг: {imdbRating}</p>
                </div>
              </>
            );
          })()}
      </div>
    </App>
  );
};
export default Film;
