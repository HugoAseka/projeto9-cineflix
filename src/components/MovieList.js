import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

  return (
    <Homepage>
      <span>Selecione o filme</span>
      <List>
        {movieListArr.map((obj, index) => {
          return (
            <Link key={index} id={obj.id} to={`/filme/${obj.id}`}>
              <img src={obj.posterURL} alt="filme" />
            </Link>
          );
        })}
      </List>
    </Homepage>
  );
}

const Homepage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    margin: 40px;
    font-size: 30px;
  }
`;
const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  max-width: 612px;

  img {
    height: 200px;
  }
`;
