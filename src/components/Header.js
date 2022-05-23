import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {

  const navigate = useNavigate();

  return (
    <Container>
      <Link to="/">
        <h1>CINEFLEX</h1>
        <div onClick={() => navigate(-1)}>Voltar</div>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  background-color: #c3cfd9;
  height: 90px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  div {
    position:absolute;
    left: 10px;
    bottom: 6px;
    font-size:20px;
    background-color: #E8833A;
    color:white;
    border-radius: 6px;
    width: 80px;
    height:26px;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  h1 {
    color: #e8833a;
  }
`;
