import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MovieList from "./MovieList";
import MovieSeats from "./MovieSeats";
import MovieTime from "./MovieTime";
import Success from "./Success";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [movieObj, setMovieObj] = useState({});
  const data = {
    ids: [],
    name,
    cpf,
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/filme/:movieid" element={<MovieTime />} />
        <Route
          path="/sessao/:sessionID"
          element={<MovieSeats setName={setName} setCPF={setCPF} data={data} movieObj={movieObj} setMovieObj={setMovieObj} />}
        />
        <Route path="/sucesso" element={<Success data={data} movieObj={movieObj} />} />
      </Routes>
    </BrowserRouter>
  );
}
