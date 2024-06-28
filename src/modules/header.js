import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from "../img/caricon.png";
import { Link } from "react-router-dom";

function header() {
  return (
    <>
      <header className="container-fluid bg-secondary fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand text-dark bg" href="#">
            <img
              src="https://logohistory.net/wp-content/uploads/2023/01/Nissan-Logo.png"
              alt=""
              width="50%"
              className="bg"
            ></img>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav">
            <div>
              <img src={Icon} className="icon"></img>
              <div className="hr"></div>
            </div>
            <div className=" collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="./cars">Cars</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="./aboutgtr">About</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="./aboutgtr">Profile</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default header;
