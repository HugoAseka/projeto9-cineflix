import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieTime() {
  const { movieid } = useParams();
  let [movie, setMovie] = useState({});

  useEffect(() => {
    const promiseMovie = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieid}/showtimes`
    );
    promiseMovie.then((response) => {
      setMovie(response.data);
      console.log((movie = { ...response.data }));
      console.log(movie);
      console.log(movie.days);
      console.log(movie.days[0]);
    });
  }, []);

  if (Object.keys(movie).length === 0) {
    return <>Carregando</>;
  }

  return (
    <>
      <div className="movie-container">
        <p>Selecione o horário</p>
        <div className="movie-time">
          {movie.days.map((obj, i) => (
            <div key={i} id={obj.id} className="day">
              <span>
                {obj.weekday} - {obj.date}
              </span>
              <div>
                <p>{obj.showtimes[0].name}</p>
                <p>{obj.showtimes[1].name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <img src={movie.posterURL} alt="poster" />
        <div>
          <span>{movie.title}</span>
        </div>
      </footer>
    </>
  );
}
