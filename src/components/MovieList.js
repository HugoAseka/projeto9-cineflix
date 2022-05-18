import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieList() {
  const [movieListArr, setMovieListArr] = useState([]);
  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((response) => {
      setMovieListArr([...response.data]);
    });
  }, []);
  let x = useParams();
  console.log(x);
  return (
    <div className="homepage">
      <span>Selecione o filme</span>
      <div className="movie-list">
        {movieListArr.map((obj, index) => {
          return (
            <img key={index} id={obj.id} src={obj.posterURL} alt="filme" />
          );
        })}
      </div>
    </div>
  );
}
