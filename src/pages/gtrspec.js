import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function gtrspec() {
  return (
    <>
      <div className="container  pt-5">
        <div className="col-12 d-flex">
          <div className="d-block border-end border-3 border-dark">
            <h1 className="h6 fw-bold me-3">HORSEPOWER</h1>
            <p>570</p>
          </div>
          <div className="d-block ms-2 border-end border-3  border-dark">
            <h1 className="h6 fw-bold me-3">TORQUE(NM)</h1>
            <p>637</p>
          </div>
          <div className="d-block strand ms-2">
            <h1 className="h6 fw-bold me-3">STANDARD</h1>
            <p>ALL-WHEEL DRIVE</p>
          </div>
        </div>
        <div className="">
          <p className="text-center mx-auto h4 fw-bold w-50 pt-5">
            Nissan GT-R: <br></br> Tech that breaks the rules
          </p>
          <p className="text-center mx-auto w-75 text-wrap fs-6 d-block">
            Question everything. Get better answers. GT-R rewrites the laws of
            sports car aerodynamics, redefines supercar performance, and gives
            you 4 seats with a handcrafted interior. Mid-engine exotics, you've
            been warned. This is tech that shatters records and delivers
            excitement at every turn. This is the Nissan GT-R.
          </p>
        </div>
      </div>
    </>
  );
}

export default gtrspec;
