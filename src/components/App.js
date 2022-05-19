import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MovieList from "./MovieList";
import MovieSeats from "./MovieSeats";
import MovieTime from "./MovieTime";
import Success from "./Success";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/filme/:movieid" element={<MovieTime />} />
        <Route path="/sessao/:sessionID" element={<MovieSeats />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

