import React from "react";
import "../App.css"; // Import the CSS file
import "bootstrap/dist/css/bootstrap.min.css";


function aboutgtr() {
  return (
    <div>
      
      <div class="card bg-dark text-white rounded-0">
        <div className="card-img3"></div>
        <div class="card-img-overlay">
          <h5 class="text-center nissan">2024 Nissan GT-R</h5>
        </div>
      </div>
      <div class="card bg-dark text-white rounded-0">
        <div className="card-img1"></div>
        <div class="card-img-overlay">
          <h5 class="position-absolute top-35  fw-bold left-10">
            AERODYNAMIC AGILITY
          </h5>
          <p class="card-text1 position-absolute top-45 left-10">
            A supercar as iconic as the GT-R entails maintaining a legendary
            status. That means enhanced aerodynamics with new front and rear
            fascias for added downforce without increasing drag. Once again, the
            GT-R redefines the excitement of driving a supercar.
          </p>
         
        </div>
      </div>
      <div class="card bg-dark text-white rounded-0">
        <div className="card-img2"></div>
        <div class="card-img-overlay">
          <h5 class="position-absolute top-35 fw-bold left-50">
            INFORMATION TAILORED<br></br> FOR YOU, BY YOU
          </h5>
          <p class="card-text2 position-absolute top-45 left-50">
            With five driver-programmable multi-function screens including info
            like turbo boost, acceleration, G-force, and even a stopwatch, the
            Nissan GT-R delivers thrill through a world of information
          </p>
        </div>
      </div>
      <div className="container content d-flex">
        <div className="d-flex col-12 ">
          <div className="col-5">
            <h2 className="brnd mt-5 fw-bold">Nissan GT-R</h2>
            <p className="qoute">Because Legends never sleep</p>
            <div className="container-fliud d-flex">
            <div className=" dscrptn ">
              <p className="text-wrap">
                There’s no rest for those passionate about ultimate performance.
                All 2024 GT-R models feature enhanced aerodynamics with new
                front and rear fascias for added downforce without increasing
                drag. The T-spec® returns, bringing iconic colors, a bespoke
                interior, and special badging. And for ultimate performance, the
                2024 GT-R NISMO® now features a front limited-slip differential
                to help tame its awesome 600-horsepower engine.
              </p>
            </div>
          </div>

         
            
          </div>
          <div className="logo">
              <img
                src="https://logohistory.net/wp-content/uploads/2023/01/Nissan-Logo.png"
                alt=""
                width="500"
              ></img>
            </div>
        </div>
      </div>
    </div>
    
  );
}

export default aboutgtr;
