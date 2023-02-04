import {MdOutlineMovieFilter} from 'react-icons/md';

function Film({film, dodaj}) {


    return (
     <div className = 'filmovi' >

        <div className="card"   >
        <img src={film.slika} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-title">{film.naziv} <MdOutlineMovieFilter></MdOutlineMovieFilter></p>
          <p className="card-text">Godina: {film.godina} <br /> 
          Producent: {film.producent} <br/> Glavne uloge: {film.glavneUloge} <br /> Zanr: {film.zanr} <br /> </p>
          <button href="#" className="btnDodaj" onClick={()=>dodaj(film.id)}> Dodaj u listu </button>
        </div>
      </div>

    </div>
    );
  }

  export default Film