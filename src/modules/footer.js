import React from "react";
import "../App.css";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="container d-flex position-relative left-10 top-10 col-11 ">
          <div className="col-7 d-flex">
            <div className="col-md-7 col-sm-5 text-white">
              <h4 className="title">Customer Service</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>1
                  <a href="#">Service Campaign</a>
                </li>
              </ul>
            </div>
            <div className="col-6  text-white">
              <h4 className="title">Network</h4>
              <div className="footer-link">
                <ul className="list-unstyled">
                  <li>
                    <a href="">Service on Wheels</a>
                  </li>
                  <li>
                    <a href="">Book A Mechanic</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4  d-flex text-white">
            <div className="icon-container">
              <h4 className="title">Nissan Social</h4>
              <div>
                <FaFacebook className="fa facebook" />
                <FaTwitter className="fa twitter" />
                <FaYoutube className="fa youtube" />
                <FaInstagram className="fa instagram" />
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </footer>
    </>
  );
}

export default Footer;
