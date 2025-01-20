import React, { useEffect, useState } from "react";
import LikeOutlined from "./svg/LikeOutlined";
import LikeFilled from "./svg/LikeFilled";
import { useLikedList } from "../entities/likedList/store/likedList";
import { IMovieRDO } from "../entities/movie/movie.rdo";

interface LikeBtnProps {
  filmData: IMovieRDO;
}

const LikeBtn: React.FC<LikeBtnProps> = ({ filmData }) => {
  const { imdbID } = filmData;
  const { hasId, addItem, removeItem } = useLikedList();
  const [isLiked, setIsLiked] = useState<boolean>(hasId(imdbID));

  useEffect(() => {
    if (isLiked) {
      addItem(filmData);
    } else {
      removeItem(imdbID);
    }
  }, [isLiked]);

  return (
    <button className="like-btn" onClick={() => setIsLiked(!isLiked)}>
      {isLiked ? <LikeFilled /> : <LikeOutlined />}
    </button>
  );
};

export default LikeBtn;
