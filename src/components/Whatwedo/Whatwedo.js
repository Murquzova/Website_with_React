// import React from "react";
import "./Whatwedo.css";
import Qoruma from "../foto/qoruma.jpg";
import Edication from "../foto/edication.png";
import Edication1 from "./Edication/Edication";
import Tibb from "../foto/tibb.png";
import { Route, Link } from "react-router-dom";
import Qoruma1 from "./Qoruma/Qoruma";
import Tibbiyardim from "./Tibbiyardim/Tibbiyardim";
import { Animated } from "react-animated-css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Whatwedo() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="whatwedo">
      <div className="wedop">
        <h1 data-aos="fade-up"
          data-aos-offset="-100"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center">Biz nə edirik.</h1>
        <br />
        <p data-aos="fade-right"
          data-aos-offset="-100"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center">
          Dünyada yaşayan təqribən 2 milyard uşaqdan 600 milyonu, yəni dünyadakı
          uşaqların 30%-i yoxsulluqdan əziyyət çəkir. Bunun da əsas
          səbəblərindən biri mənasız silahlı münaqişələrdir. Əlbəttə, bu aclıq,
          epidemiyalar, təhsilsizlik kimi problemləri də özü ilə gətirir.
        </p>
        <br />
        <p data-aos="fade-right"
          data-aos-offset="-100"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center">Ətraflı məlumat almaq üçün ikonların üzərinə basın.</p>
      </div>
      <div>
        <div
          data-aos="fade-right"
          data-aos-offset="-100"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center"     data-aos="fade-right"
          data-aos-offset="-100"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center"
        >
          <Link to="/head/qoruma">
            <img src={Qoruma} alt="" />
          </Link>
          {/* <Link to="/head/qoruma">
              <img src={Qoruma} alt="" />
          </Link>  */}
          <p>Qoruma</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="-100"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center"
        >
          <Link to="/head/edication">
            <img src={Edication} alt="" />
          </Link>
          <p>Təhsil</p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="-100"
          data-aos-anchor-placement="top-center"
        >
          <Link to="/head/tibbiyardim">
            <img src={Tibb} alt="" />
          </Link>
          <p>Tibbi Yardım</p>
        </div>
      </div>

      <Route path="/head/qoruma" component={Qoruma1} />
      <Route path="/head/edication" component={Edication1} />
      <Route path="/head/tibbiyardim" component={Tibbiyardim} />
    </div>
  );
}

export default Whatwedo;
