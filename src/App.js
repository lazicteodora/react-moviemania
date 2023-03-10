import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import ONama from './components/ONama';
import Filmovi from './components/Filmovi';
import { useState } from 'react';
import ListaGledanja from './components/ListaGledanja';
import CopyButton from "./components/CopyButton";

function App() {

  const email = "moviemania@gmail.com";

  const [listaFilmova,setListaF]=useState([]);
  const[sviFilmovi] = useState([

    {
        id:1,
        slika: "https://m.media-amazon.com/images/I/81uYPlcYSBL._RI_.jpg",
        naziv:"Mean Girls",
        godina:"2004",
        producent:"Lorne Michaels",
        glavneUloge: "Lindsay Lohan, Rachel McAdams, and Tina Fey",
        zanr: "Teen comedy",
        lista: 0
    },
    {
      id:2,
      slika: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-10296726314.jpg",
      naziv:"Legally Blonde",
      godina:"2001",
      producent:"Marc E. Platt",
      glavneUloge: "Reese Witherspoon, Luke Wilson, and Selma Blair",
      zanr: "Romantic comedy",
      lista: 0
    },
    {
      id:3,
      slika: "https://lumiere-a.akamaihd.net/v1/images/p_theprincessdiaries_19875_2ef7e437.jpeg",
      naziv:"The Princess Diaries",
      godina:"2001",
      producent:"Debra Martin Chase",
      glavneUloge: "Anne Hathaway, Julie Andrews, and Hector Elizondo",
      zanr: "Romantic comedy",
      lista: 0
    },
    {
      id:4,
      slika: "https://www.sonypictures.ie/sites/ireland/files/2021-01/littlewomen_UK.jpg.jpg",
      naziv:"Little Women",
      godina:"2019",
      producent:"Amy Pascal",
      glavneUloge: "Saoirse Ronan, Emma Watson, and Florence Pugh",
      zanr: "Drama",
      lista: 0
    },
    {
      id:5,
      slika: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534438378/to-all-the-boys-ive-loved-before-9781534438378_hr.jpg",
      naziv:"To All the Boys I've Loved Before",
      godina:"2018",
      producent:"Matt Kaplan",
      glavneUloge: "Lana Condor, Noah Centineo, and Janel Parrish",
      zanr: "Romance",
      lista: 0
    },
    {
      id:6,
      slika: "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg",
      naziv:"Crazy Rich Asians",
      godina:"2018",
      producent:"Nina Jacobson",
      glavneUloge: "Constance Wu, Henry Golding, and Awkwafina",
      zanr: "Romantic comedy",
      lista: 0
    },
    {
      id:7,
      slika: "https://kbimages1-a.akamaihd.net/a56668c1-0937-4a7a-9dc6-a7020a0377aa/1200/1200/False/the-hunger-games-official-illustrated-movie-companion.jpg",
      naziv:"The Hunger Games",
      godina:"2012",
      producent:"Nina Jacobson",
      glavneUloge: "Jennifer Lawrence, Josh Hutcherson, and Liam Hemsworth",
      zanr: "Dystopian science fiction",
      lista: 0
    },
    {
      id:8,
      slika: "https://lionsgate.brightspotcdn.com/35/c5/cfec3649437b8f22b02fa0df40eb/divergent-poster-01.jpg",
      naziv:"Divergent",
      godina:"2014",
      producent:"Lucy Fisher",
      glavneUloge: "Shailene Woodley, Theo James, and Kate Winslet",
      zanr: "Dystopian science fiction",
      lista: 0
    },



  ]);

  const [krterijumPretrage,setKriterijumPretrage]=useState("");

  function pretrazi(kriterijum){
    setKriterijumPretrage(kriterijum);
  }

  function dodaj(id){
    for(var i=0;i<sviFilmovi.length;i++){
      if(sviFilmovi[i].id==id){
        sviFilmovi[i].lista=1;
      }
    }
    var niz = sviFilmovi.filter((film)=>film.lista==1);
    setListaF(niz);
  }

  function izbaci(id){
    for(var i=0;i<sviFilmovi.length;i++){
      if(sviFilmovi[i].id==id){
        sviFilmovi[i].lista=0;
      }
    }
    var niz = sviFilmovi.filter((film)=>film.lista==1);
    setListaF(niz);
  }

  return (
    <div>
    <BrowserRouter>
        <NavBar pretrazi={pretrazi} ></NavBar>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/onama" element={<ONama></ONama>}></Route>
            <Route path="/filmovi" element={<Filmovi kriterijum={krterijumPretrage} filmovi={sviFilmovi} dodaj={dodaj}></Filmovi>}></Route>
            <Route path="/listaGledanja" element={<ListaGledanja kriterijum={krterijumPretrage}  filmovi={listaFilmova} izbaci={izbaci}></ListaGledanja>}></Route>
          </Routes>
     </BrowserRouter>
     <div className="kontejner">
    <CopyButton textToCopy={email}/> 
    </div>
     <Footer></Footer>
  </div>
  );
}

export default App;
