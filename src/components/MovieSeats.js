import Header from "./Header";
import styled from "styled-components";
import { get } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function MovieSeats() {
  const [allSeats, setAllSeats] = useState([]);
  const [movieObj, setMovieObj] = useState({});
  const { sessionID } = useParams();

  useEffect(() => {
    const seatPromise = get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`
    );

    seatPromise.then((response) => {
      setAllSeats([...response.data.seats]);
      setMovieObj({ ...response.data });
    });
  }, [sessionID]);

  return (
    <Container>
      <Header />
      <p>Selecione o assento</p>
      <Seats>
        {allSeats.map((item, index) => {
          return (
            <Seat state={item.isAvailable} key={index}>
              {index + 1}
            </Seat>
          );
        })}
      </Seats>
      <Subtitles>
        <div>
          <h6> </h6>
          <p>Selecionado</p>
        </div>
        <div>
          <h6> </h6>
          <p>Disponível</p>
        </div>
        <div>
          <h6> </h6>
          <p>Indisponível</p>
        </div>
      </Subtitles>
      <InputContainer>
        <span>Nome do comprador:</span>
        <input type="text" placeholder="Digite seu nome" />
      </InputContainer>
      <InputContainer>
        <span>CPF do comprador:</span>
        <input type="text" placeholder="Digite seu CPF.." />
      </InputContainer>
      <Button>Reservar Assento(s)</Button>
      <Footer>
        {Object.keys(movieObj).length === 0 ? (
          "carregando"
        ) : (
          <>
            <img src={movieObj.movie.posterURL} alt="poster" />
            <div>
              <span>{movieObj.movie.title}</span>
              <span>
                {movieObj.day.weekday} - {movieObj.name}
              </span>
            </div>
          </>
        )}
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 30px;
    margin: 40px 0 20px 0;
  }
`;

const Seats = styled.div`
  max-width: 612px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: fit-content;
  padding: 30px 20px;
  gap: 10px;
`;

const Seat = styled.span`
  width: 30px;
  background-color: ${({state} )=> ( state ? "#C3CFD9" : "#FBE192")};
  height: 30px;
  text-align: center;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Subtitles = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: fit-content;
  width: 100%;
  font-size: 2px;
  margin-bottom: 40px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  div p {
    font-size: 18px;
    height: fit-content;
    margin: 14px 0 0 0;
  }

  div h6 {
    background-color: red;
    height: 30px;
    width: 30px;
    border-radius: 100px;
  }

  div:nth-child(1) h6 {
    background-color: #8dd7cf;
  }

  div:nth-child(2) h6 {
    background-color: #c3cfd9;
  }

  div:nth-child(3) h6 {
    background-color: #fbe192;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 0 5px 0;
  gap: 10px;

  input {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border-width: 1px;
  }
`;

const Button = styled.div`
  background-color: #e8833a;
  margin: 60px 20px 100px 20px;
  font-size: 20px;
  height: 50px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: white;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  height: 120px;
  width: 100%;
  background-color: #dfe6ed;
  display: flex;
  align-items: center;
  font-size: 30px;

  img {
    height: 110px;
    padding-left: 20px;
    margin-right: 30px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
