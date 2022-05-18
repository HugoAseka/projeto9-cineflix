import Header from "./Header";

export default function MovieSeats() {

    const allseats = [];
    for(let i = 1 ; i <= 50 ; i++){
        allseats.push(i);
    }

  return (
    <div className="seat-page">
      <Header />
      <p>Selecione o assento</p>
      <div className="seats">
        {allseats.map((item,index) => {
            return(
                <span key={index}>{item}</span>
            )
        } )}
      </div>
      <div className="subtitles">
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
      </div>
    </div>
  );
}
