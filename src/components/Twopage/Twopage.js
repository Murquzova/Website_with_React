import React, { useEffect } from "react";
import AOS from "aos";
import "./Twopage.css";
import Twopage2 from "./Twopage2/Twopage2"
import Twopage3 from "./Twopage3/Twopage3"
import Soldat from "./Soldat/Soldat"
// import Donate from "../Donate/Donate"
import Sign from "../Sign/Sign"
import Footer from "../Footer/Footer";
function Twopage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id='yardim'>
      {/* Müharibə ən çox uşaqların düşmənidir. */}
          <div className="twopage">
              <p  data-aos="fade-up"
          data-aos-offset="-200"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center" className="ptwopage">Hər bir uşağın təhlükəsiz və əhatəli bir mühitdə böyümək hüququ vardır.</p>
          </div>
      <Twopage2 />
      <Soldat/>
      <Twopage3 />
      {/* <Donate /> */}
      {/* <Sign /> */}
      <Footer/>
    </div>
  );
}

export default Twopage;
