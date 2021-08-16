import React, { useState } from "react";
import "./Deti.css";
import Dia from "../foto/Dia.jpg";
import Abdul from "../foto/Karan.jpg";
import Jean from "../foto/Sarah.jpg";
import Muhsen from "../foto/Zilan.jpg";
function Deti() {
  const [children, setChildren] = useState([
    {
      id: 1,
      name: "Sarah",
      age: 6,
      country: "Iraq",
      image: Dia,
    },
    {
      id: 2,
      name: "Muhsen",
      age: 5,
      country: "Suriya",
      image: Abdul,
    },
    {
      id: 3,
      name: "Könül",
      age: 8,
      country: "Fələstin",
      image: Jean,
    },
    // {
    //   id: 4,
    //   name: "Sarah4",
    //   age: 5,
    //   country: "Iraq",
    //   image:Muhsen
    // },
  ]);
  return (
    <div className="deti">
      <div>
        <p>Müharibə onların uşaqlığını əllərindən alır.</p>
      </div>
      <div className="detifoto">
        {children.map((child) => {
          return (
            <div
              data-aos="fade-top"
              data-aos-offset="-100"
              data-aos-delay="40"
              data-aos-anchor-placement="top-center"
            >
              <img src={child.image} alt="" />
              <div className="detiyazi">
                <p>Ad : {child.name}</p>
                <p>Yaş : {child.age}</p>
                <p>Ölkə : {child.country}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Deti;
