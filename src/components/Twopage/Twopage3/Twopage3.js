import React from "react";
import "./Twopage3.css";
// import Head from "../../foto/ruki.jpg"
import Nad from "../../foto/volonter.svg";
// import Kras from "../../foto/kras.jfif"
import Tehsil from "../../foto/donate.svg";
import { Link, Route } from "react-router-dom";
import Iane from "./Iane/Iane"
import Konullu from "./Konullu/Konullu"
function Twopage3() {
  return (
    <div className="twopage3">
      <div className="divp3">
        <p data-aos="fade-up"
          data-aos-offset="-200"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center">
          Uşağlara kömək etməklə onların həyatına böyük təsir göstərə bilərsiz.
        </p>
      </div>
      <br />
      <br />
      <div>
        <div data-aos="fade-right"
          data-aos-offset="-200"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center"  > 
          <div >
        <Link to="/yardim/donate">  <img src={Nad} alt="" /></Link>  
          </div>
          <br />
          <p>Könüllü Ol</p>
        </div>
        <div data-aos="fade-up"
          data-aos-offset="-200"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center">
          <div >
      <Link to="/yardim/konulluol"><img src={Tehsil} alt="" /></Link>      
          </div>
          <br />
          <p>İanə Et</p>
        </div>
      </div>
      <br />
      <br />
      <Route path="/yardim/donate" component={Konullu} />
      <Route path="/yardim/konulluol" component={Iane} />
    </div>
  );
}

export default Twopage3;
