import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" style={{color: "lightblue"}} href="/"><h1><em>Michelob Angelo's Pietàproom</em></h1></a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" style={{color: "lightblue"}} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color: "lightblue"}} href="/">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color: "lightblue"}} href="/">Locations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color: "lightblue"}} href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div> */}
    </nav>
  );
}

export default Header;