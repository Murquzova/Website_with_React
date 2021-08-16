import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import {
  Form,
  Button,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="header">
      <header>
        <div className="bashliq">
          <h1>DƏSTƏK OL </h1>
          <i class="fas fa-hand-holding-heart"></i>
        </div>
        <ul>
          <li>
            {" "}
            <NavLink activeClassName="active" exact to="/">
            Əsas səhifə            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/yardim">
              Yardim
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink activeClassName="active" to="/haqqimizda">
              Video
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/donate">
              Ianə Et
            </NavLink>
          </li>
        </ul>
        <ul className={"mobileMenu " + (menu && "open-menu")}>
          <li>
            {" "}
            <NavLink activeClassName="active" exact to="/">
              Esas sehife
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/yardim">
              Yardim
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink activeClassName="active" to="/haqqimizda">
              Video
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/donate">
              Ianə Et
            </NavLink>
          </li>
        </ul>
        <h4 className="burger" onClick={() => setMenu(!menu)}><i class="fas fa-bars"></i></h4>
      </header>
    </div>

    // <div className="header">
    //   <header>
    //     <Navbar expand="lg">
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />

    //       <Navbar.Collapse>
    //         <div class="navbarRight" className="bashliq">
    //           <h1>DƏSTƏK </h1>
    //           <i class="fas fa-hand-holding-heart"></i>
    //         </div>

    //         <div className="container">
    //           <ul>
    //             <NavLink activeClassName="active" exact to="/">
    //               <li className="nav-item ">Esas sehife</li>
    //             </NavLink>

    //             <NavLink activeClassName="active" to="/yardim">
    //               <li className="nav-item"> Yardim </li>
    //             </NavLink>

    //             <NavLink activeClassName="active" to="/haqqimizda">
    //               <li className="nav-item"> Video</li>
    //             </NavLink>

    //             <NavLink activeClassName="active" to="/donate">
    //               <li className="nav-item">Donate</li>
    //             </NavLink>
    //           </ul>
    //         </div>
    //       </Navbar.Collapse>
    //     </Navbar>
    //   </header>
    // </div>
  );
}

export default Header;
