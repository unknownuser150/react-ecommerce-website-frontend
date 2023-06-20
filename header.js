import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import ecomm from "./images/ecommerce_logo1.png"
import "./header.css"

import { Outlet, Link } from "react-router-dom";
function header(){
    return(
       <div className = "Header">
        <header data-bs-spy="scroll" data-bs-target=".navbar" id="header">

<nav className="navbar navbar-expand-lg  bg-info ">
  <div className="container-fluid   ">
    <a className="navbar-brand" href="#">
       <img className="sitelogo " src={ecomm} /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <form className="d-flex position-relative searchbox col-lg-6 me-lg-5 pe-lg-5" role="search">
       <input className="form-control inputsearchbox" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-danger searchbutton " type="submit">Search</button>
    </form>

  </div>
  <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0 searchbox loginbutton  ">
    <a href="login.html"><button type="button" className="btn btn-danger me-4 mt-2 login-button">Login</button></a>
    <a href="cart.html" className=" me-lg-5 fs-2 me-1"><FaShoppingCart/></a>
  </ul>
  
</nav>
<nav className="navbar navbar-expand-lg bg-light ">
  <div className="container-fluid ">


    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <a className="nav-link active" aria-current="page" href="">Home</a>
        <a className="nav-link" href="#">All products</a>
        <div className="d-flex">
          <div className="dropdown me-1">
            <ul className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Women</ul>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Dresses</a></li>
              <li><a className="dropdown-item" href="#">Pants</a></li>
              <li><a className="dropdown-item" href="#">Skirts</a></li>
            </ul>
          </div>

        </div>


        <div className="d-flex">
          <div className="dropdown me-1">
            <ul className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Mens</ul>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Shirt</a></li>
              <li><a className="dropdown-item" href="#">Pants</a></li>
              <li><a className="dropdown-item" href="#">Hoodies</a></li>
            </ul>
          </div>

        </div>


        <a className="nav-link" href="#">Kids</a>
        <Link to="/Contactus" className="nav-link">Contactus</Link>
      </div>
    </div>
  </div>
</nav>
</header>


       </div>
    )
}

export default header;