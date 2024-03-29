import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" id="logo" style={{color: "orangered"}} href="/"><h2><em>Michelob Angelo's Pietàproom</em></h2><p><em>International Artisanal Tap House</em></p></a>
        <div className="collapse navbar-collapse d-flex justify-content-end align-items-center me-5" id="navbarNav">
          <ul className="navbar-nav">
            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}

            <li className="nav-item">
              <a className="nav-link active" style={{color: "orangered"}} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color: "orangered"}} href="/">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color: "orangered"}} href="/">Locations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color: "orangered"}} href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;