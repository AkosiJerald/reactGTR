import React from "react";
import "../App.css";
import car1 from "../img/red.jpg";
import car2 from "../img/gray.jpg";
import car3 from "../img/blue.jpg";
import car4 from "../img/gen1.jpg";
function Trailer() {
  return (
    <>

      <div class="row row-cols-1 row-cols-md-2 g-4 m-5">
      <div class="col">
      <div class="card ">
        <img src={car2} class="card-img-top" alt="..." ></img>
          <div class="card-body">
          <h5 class="card-title fs-6">GT-R R35 (1st Gen) Facelift 3 </h5></div>
          <div class="card-footer">
            <small class="text-muted">2024 - Now</small>
          </div>
        </div>
       
      </div>
      <div class="col">
        <div class="card">
        <img src={car3} class="card-img-top" alt="..."></img>
          <div class="card-body">
          <h5 class="card-title fs-6">R35 (1st Gen) Facelift 2</h5></div>
          <div class="card-footer">
            <small class="text-muted">2017 - 2023 </small>
          </div>
        </div>
      
      </div>
      <div class="col">
        <div class="card">
        <img src={car1} class="card-img-top "  alt="..."></img>
          <div class="card-body">
          <h5 class="card-title fs-6 ">GT-R R35 (1st Gen) Facelift</h5></div>
          <div class="card-footer">
            <small class="text-muted">2012 - 2016</small>
          </div>
        </div>
        
      </div>
      <div class="col">
        <div class="card">
        <img src={car4} class="card-img-top" alt="..."></img>
          <div class="card-body">
          <h5 class="card-title fs-6">GT-R R35 (1st Gen) </h5> </div>
          <div class="card-footer">
            <small class="text-muted">2009 - 2011</small>
          </div>
        </div>
       
      </div>
    </div>
    </>
  );
}

export default Trailer;
