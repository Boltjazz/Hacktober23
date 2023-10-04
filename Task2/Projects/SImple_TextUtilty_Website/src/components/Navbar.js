import React from "react";

 
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`shadow p-3 navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link  className="navbar-brand" to="/">
          {props.title}
        </Link >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
          </Link >
            </li>
          </ul>
          {/*<form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>*/}
         

 
 <div
            className={`form-check form-switch text-${
              props.mode === 'light' ? `dark` : `light` 
            }`}
          >
            <input
              className="form-check-input  "
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
               
            >
              Enable DARK Mode  
            </label>
          </div>

{/*    
          <div
            className={`form-check form-switch text-${
              props.ccol === 'green'?'red':'green'
            }`}
          >
            <input
              className="form-check-input  mx-.5"
              onClick={props.Cmode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label  " 
              htmlFor="flexSwitchCheckDefault" style={{  color:`${props.mode==='light'?'black':'white'}`}}
             
           
               
            >
              DARKMODE Options !
            </label>
          </div>

  */}




        </div>
      </div>
    </nav>
  );
}
