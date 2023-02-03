import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div>
        <nav className="nav">
            <div className="nav__title"><h1>Moviemania</h1></div>
                <ul className="nav__list">
                    <li className="nav__item__search"> 

                      <input type="text" id="kriterijum" placeholder="Search.." name="search"/>

                    </li>
                    <li className="nav__item">   <Link to='/'>Home</Link></li>
                    <li className="nav__item"> <Link to='/filmovi'>Filmovi</Link></li>
                    <li className="nav__item"> <Link to='/onama'>O nama</Link></li>
                    
                </ul>
        </nav>
    </div>
  );
}

export default NavBar;