import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import ONama from './components/ONama';
import Filmovi from './components/Filmovi';
import { useState } from 'react';

function App() {
  const[sviFilmovi] = useState([

    {
        id:1,
        slika: "https://m.media-amazon.com/images/I/81uYPlcYSBL._RI_.jpg",
        naziv:"Mean Girls",
        godina:"2004",
        producent:"Lorne Michaels",
        glavneUloge: "Lindsay Lohan, Rachel McAdams, and Tina Fey",
        zanr: "Teen comedy",
    },
    {
      id:2,
      slika: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-10296726314.jpg",
      naziv:"Legally Blonde",
      godina:"2001",
      producent:"Marc E. Platt",
      glavneUloge: "Reese Witherspoon, Luke Wilson, and Selma Blair",
      zanr: "Romantic comedy",
    },
    {
      id:3,
      slika: "https://lumiere-a.akamaihd.net/v1/images/p_theprincessdiaries_19875_2ef7e437.jpeg",
      naziv:"The Princess Diaries",
      godina:"2001",
      producent:"Debra Martin Chase",
      glavneUloge: "Anne Hathaway, Julie Andrews, and Hector Elizondo",
      zanr: "Romantic comedy",
    },
    {
      id:4,
      slika: "https://www.sonypictures.ie/sites/ireland/files/2021-01/littlewomen_UK.jpg.jpg",
      naziv:"Little Women",
      godina:"2019",
      producent:"Amy Pascal",
      glavneUloge: "Saoirse Ronan, Emma Watson, and Florence Pugh",
      zanr: "Drama",
    },
    {
      id:5,
      slika: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534438378/to-all-the-boys-ive-loved-before-9781534438378_hr.jpg",
      naziv:"To All the Boys I've Loved Before",
      godina:"2018",
      producent:"Matt Kaplan",
      glavneUloge: "Lana Condor, Noah Centineo, and Janel Parrish",
      zanr: "Romance",
    },
    {
      id:6,
      slika: "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg",
      naziv:"Crazy Rich Asians",
      godina:"2018",
      producent:"Nina Jacobson",
      glavneUloge: "Constance Wu, Henry Golding, and Awkwafina",
      zanr: "Romantic comedy",
    },
    {
      id:7,
      slika: "https://kbimages1-a.akamaihd.net/a56668c1-0937-4a7a-9dc6-a7020a0377aa/1200/1200/False/the-hunger-games-official-illustrated-movie-companion.jpg",
      naziv:"The Hunger Games",
      godina:"2012",
      producent:"Nina Jacobson",
      glavneUloge: "Jennifer Lawrence, Josh Hutcherson, and Liam Hemsworth",
      zanr: "Dystopian science fiction",
    },
    {
      id:8,
      slika: "https://lionsgate.brightspotcdn.com/35/c5/cfec3649437b8f22b02fa0df40eb/divergent-poster-01.jpg",
      naziv:"Divergent",
      godina:"2014",
      producent:"Lucy Fisher",
      glavneUloge: "Shailene Woodley, Theo James, and Kate Winslet",
      zanr: "Dystopian science fiction",
    },



  ]);

  return (
    <div>
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/onama" element={<ONama></ONama>}></Route>
            <Route path="/filmovi" element={<Filmovi  filmovi={sviFilmovi}></Filmovi>}></Route>
          </Routes>
     </BrowserRouter>
     <Footer></Footer>
  </div>
  );
}

export default App;
