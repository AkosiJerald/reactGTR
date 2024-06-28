import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Spec from '../pages/gtrspec'

function WelcomeSection() {
  return (
    <>
    
    <section className="container-fuild welcome-section d-flex align-items-center justify-content-center ">
      <div className="container">
       <div className="welcome-content text-center w-100"> 
       <h1 className="fw-bold qoute ">"The Nissan GT-R is a daily supercar." </h1>
        <p className="text-light ">- Jeremy Clarkson</p>
       </div>
      </div>
    </section>
    <Spec/>
    </>
  );
}

export default WelcomeSection;
