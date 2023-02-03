import {BiCommentDots} from "react-icons/bi"

function ONama() {
    return (
      <div  className='onama'>

      <div className="onama-text">
          <> O nama <BiCommentDots></BiCommentDots></>
      </div>

      <br /><br /><br /><br /><br />
      <div className="flex-container">
          <div>
              <h2>Cilj sajta:</h2>
              <p> Ideja kreiranja ove filmske veb stranice bila je da se ljubiteljima filmova pruži 
                centralizovana platforma za otkrivanje, gledanje i praćenje svojih omiljenih filmova. 
                Sa beskrajnim nizom novih izdanja i beskrajnim opcijama, pronalaženje pravog filma za gledanje 
                može biti neodoljivo. Naš veb-sajt ima za cilj da olakša ovaj proces tako što će pripremiti 
                sveobuhvatan katalog filmova i pružiti korisnicima personalizovane preporuke na osnovu 
                njihovih interesovanja.<br></br> <br></br>Funkcija liste za praćenje omogućava korisnicima da prate filmove koje 
                žele da gledaju u budućnosti i pomaže im da nikada više ne propuste film koji morate da pogledate. 
                Pored toga, kreiranjem korisničkog naloga, korisnici mogu da pristupe svojoj listi posmatranja 
                i istoriji pregleda sa bilo kog mesta, što olakšava praćenje onoga što su gledali i šta žele sledeće 
                da gledaju. Verujemo da naša veb lokacija ispunjava potrebu na tržištu za jednostavnijim i 
                personalizovanijim iskustvom gledanja filmova.
                 </p>
          </div>
          <div className="home-slika">
            <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQUoZCSCYof3HYEliAmMMMTFSyVhFN1vu054EuD_uWlZAalhgWlvJdq-IDHD_kZ0nALya_pQEu1VmYP2laqROJq_pbtYncT3BdPdI-bfR9IWG-8sQdYb7Kus46bh3-5wqVYT4qv5Na49RY7-dTjZn-P39Yqc.jpg?r=3e7" alt="film" className="SlikaHome" />
          </div>
         
        </div>  

    </div>

    );
  }

  export default ONama;