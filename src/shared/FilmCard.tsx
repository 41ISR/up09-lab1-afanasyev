import React from "react";
import { IMovieRDO } from "../entities/movie/movie.rdo";
import { Link } from "react-router";
import LikeBtn from "./LikeBtn";

interface FilmCardProps {
  filmData: IMovieRDO;
}

const FilmCard: React.FC<FilmCardProps> = ({ filmData }) => {
  const { Title, Year, Poster, imdbID } = filmData;
  return (
    <div className="film-card">
      <img
        src={Poster == "N/A" ? "/src/shared/assets/empty-poster.png" : Poster}
        alt={`${Title} poster`}
        className="film-card__poster"
      />
      <div className="film-card__details">
        <Link to={`/film/${imdbID}`} className="film-card__title">{Title}</Link>
        <div className="film-card__row">
          <p className="film-card__year">{Year}</p>
          <div className="film-card__like-icon">
            <LikeBtn filmData={filmData}></LikeBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
