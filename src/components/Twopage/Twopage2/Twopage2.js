import React, { useEffect } from "react";
import AOS from "aos";
import Twopage2 from "./Twopage2.css";
function Twopage1() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="twopage2">
      <p>
        <h1 data-aos="fade-up"
          data-aos-offset="-200"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center">Müharibə onların uşağlığını əllərindən alır.</h1>
        <br />
        <br />

        <p data-aos="fade-right"
          data-aos-offset="-200"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center">
          Dünyadakı hər altı uşaqdan biri münaqişələrin təsirləndiyi ərazilərdə
          yaşayır və uşaqlar son 20 ildə hər an olduğundan daha çox münaqişə
          riski altındadır.
        </p>
        <br />
        <p data-aos="fade-right"
          data-aos-offset="-200"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center">
          {" "}
          Suriyadan Cənubi Sudana, Yəməndən DRC-yə qədər uşaqlar zorakılıqlara
          qapılırlar ki, bu da onların etdikləri deyil.
        </p>
        <br />
        <p data-aos="fade-right"
          data-aos-offset="-200"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center">
          {" "}
          Uşaqlar öldürülür və şikəst edilir, təcavüz olunur və işə götürülür,
          yardım və tibbi yardımdan imtina edilir. Müharibə edən tərəflər
          məktəbləri və xəstəxanaları on illərdir görülməmiş miqyasda
          bombalayır.
        </p>
      </p>
    </div>
  );
}

export default Twopage1;
