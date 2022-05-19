import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MovieTime() {
  
  let [movie, setMovie] = useState({});
  const { movieid } = useParams();
  useEffect(() => {
  
    const promiseMovie = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieid}/showtimes`
    );
    promiseMovie.then((response) => {
      setMovie(response.data);

    });
  }, [movieid]);

  if (Object.keys(movie).length === 0) {
    return <>Carregando</>;
  }

  return (
    <>
      <Container>
        <p>Selecione o horário</p>
        <Time>
          {movie.days.map((obj, i) => (
            <Day key={i} id={obj.id} >
              <span>
                {obj.weekday} - {obj.date}
              </span>
              <div>
                <Link to={`/sessao/${obj.showtimes[0].id}`}>
                  {" "}
                  <p>{obj.showtimes[0].name}</p>
                </Link>
                <Link to={`/sessao/${obj.showtimes[1].id}`}>
                  {" "}
                  <p>{obj.showtimes[1].name}</p>
                </Link>
              </div>
            </Day>
          ))}
        </Time>
      </Container>
      <Footer>
        <img src={movie.posterURL} alt="poster" />
        <div>
          <span>{movie.title}</span>
        </div>
      </Footer>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 70px;

  > p {
    font-size: 30px;
    margin: 50px 0 60px 0;
  }
`;

const Time = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Day = styled.div`
    display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  span {
  font-size: 24px;
  margin-left: 20px;
}
> div {
  display: flex;
}

div  p {
  background-color: #e8833a;
  margin: 20px;
  font-size: 20px;
  height: 50px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: white;
}
`;

const Footer = styled.div`

  position: fixed;
  bottom: 0;
  height: 160;
  width: 100%;
  background-color: #dfe6ed;
  display: flex;
  align-items: center;
  font-size: 30px;
  
  span {
    font-size: 20px;
    font-weight:500;
  }
  img {
  height: 120px;
  padding-left: 20px;
  margin-right: 20px;
}
`;