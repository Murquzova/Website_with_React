import React, { useEffect } from "react";
import AOS from "aos";
import "./Threepage.css"
import Meqsed from "./Meqsed/Meqsed"
import Threevideo from "./Threevideo/Threevideo"
function Threepage() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div>
        <div className="threepage" >
            <p    data-aos="fade-up"
              data-aos-offset="-100"
              data-aos-delay="40"
              data-aos-anchor-placement="top-center">
            Hər bir uşaq  qayğısız uşaqlığa layiqdir!
            </p>
            </div>
            {/* <Meqsed/> */}
            <Threevideo/>
            </div>
    )
}

export default Threepage
