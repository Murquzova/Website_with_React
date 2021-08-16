import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="body">
      <h1
        data-aos-offset="-200"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        Məqsədimiz nədir?
      </h1>
      <br />
      <p
        data-aos-offset="-200"
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
      >
        Heç uşaqlığı olmadan böyüyən uşaqlar görübsüz?
      </p>
      <br />
      <p
        data-aos-offset="-200"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        Təəssüf ki, 21-ci əsrdə olmağımıza baxmayaraq müharibələr baş verir və
        uşaqlığını sevinc səslərində keçirən deyildə, bombaların səslərində
        kecirən uşaqlar var. Uşaqlığı müharibə zonalarında keçənlərə dəstək
        etməliyik və onlara kömək etmək bizim əlimizdədir.
      </p>
      <br />
      <p
        data-aos-offset="-200"
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
      >
        Müharibəyə qapılan uşaqları qorumaq, öyrətmək və haqlarını müdafiə etmək
        bizim əlimizdədir.
      </p>
      <br />
      <Link to="/donate">
        <button
          data-aos-offset="-200"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          IANƏ ET
        </button>
      </Link>
    </div>
  );
}

export default Body;
