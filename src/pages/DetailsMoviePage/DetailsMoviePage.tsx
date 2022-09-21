import React from "react";
import { useParams } from "react-router-dom";
import { movieAPI } from "services/movieAPI";

export const DetailsMoviePage = () => {
  const { imdbID } = useParams();
  imdbID &&
    movieAPI.getDetailsById(imdbID).then((data) => {
      // console.log(data);
    });

  return <div>{imdbID}</div>;
};
