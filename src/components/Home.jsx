import {GiPopcorn} from "react-icons/gi"

function Home() {
    return (
      <div  className='home'>

      <div className="home-text">
          <> <GiPopcorn></GiPopcorn> Otkrijte svoj sledeći omiljeni film <GiPopcorn></GiPopcorn></>
      </div>

      <br /><br /><br /><br /><br />
      <div className="flex-container">
          <div className="home-slika">
            <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQQ6ILMVwPGcdGDQWBn98lpz1TIxcUWbVbzvDYgW-85cK4twvzh-nrX32TUH13AAye5OGjNcN4qXapC-NJHSiSvQHYKRChXqgmUwOLK1e3FxT0UkLNrE67oIV-ZqeDuFuDP0fz5uFQtbs7c-asnahUPWFMeQ.jpg?r=429" alt="film" className="SlikaHome" />
          </div>

          <div className="Home-paragraf">
              <h2>Zadatak:</h2>
              <p> Dobrodošli na MovieMania, vaše krajnje odredište za sve filmove! Naša veb stranica je 
                dizajnirana za ljubitelje filmova i entuzijaste koji žele da prate svoje omiljene filmove i otkriju 
                nove. Ovde možete kreirati svoju personalizovanu listu filmova i dodati filmove koje volite u svoje 
                favorite. <br></br><br></br> Bez obzira da li ste raspoloženi za akciju, romansu, dramu ili komediju, pokrili smo vas 
                ogromnom kolekcijom filmova iz različitih žanrova i epoha. Naše korisničko sučelje olakšava pretragu 
                i pronalaženje filmova koje tražite, a naš sistem preporuka vam pomaže da otkrijete skrivene dragulje 
                koje ste možda propustili. Zato, pridružite nam se danas i počnite da istražujete svet filmova kao 
                nikada ranije!
                 </p>
          </div>

        </div>  

    </div>

    );
  }

  export default Home;