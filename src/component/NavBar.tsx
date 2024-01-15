import React, { useContext, useState } from 'react'
import { useHeroe } from '../Hook/UseHeroe'
import { heroesContext } from '../Context/HeroesContext';

const NavBar = () => {

    const [inputSearch, setInputSearch] = useState("");
    // const {setSearch} = useHeroe()
    const {setSearch} = useContext(heroesContext)
    const search = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
       setSearch(inputSearch)
       console.log(inputSearch);
       
      };

  return (
    <>
   <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
    <form className="d-flex">
      <input
      onChange={(e) => setInputSearch(e.target.value)}
      value={inputSearch}
      className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button
      onClick={(e) => search(e)}
      className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
  )
}

export default NavBar
