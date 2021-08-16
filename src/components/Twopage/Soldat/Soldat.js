import React from "react";
import "./Soldat.css";
import Esger from "../../foto/soldat.jpeg";
function Soldat() {
  return (
    <div className="soldat">
      <div>
          <div data-aos="fade-right"
          data-aos-offset="-200"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center">
        <img src={Esger} alt="" />
      </div>
      <div data-aos="fade-up"
          data-aos-offset="-200"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center">
        <p>
          Müharibədə, xüsusən son on il ərzində acınacaqlı bir hal qəddar
          münaqişələrdə əsgərlər olaraq uşaqların istifadəsidir. Uşaq əsgərlər
          dünyanın bütün bölgələrində mövcuddur və ən çox qarşıdurmalarda
          iştirak edirlər. Bununla belə, problem xüsusilə Afrikada aktualdır,
          burada doqquz yaşdan kiçik olan uşaqlar silahlı münaqişədə iştirak
          edirlər. Uşaq əsgərlərinin əksəriyyəti 14 və 18 yaş arasındadır. Uşaq
          əsgərlər həm üsyançı qruplar, həm də hökumət qüvvələri tərəfindən işə
          götürülür. BMT-nin Uşaq Hüquqları Konvensiyası dövlət tərəfindən 15
          yaşınadək olan uşaqların hərbi əməliyyatlarda iştirak etməməsini təmin
          edilməsini tələb edir. Ancaq bu, çoxları tərəfindən aşağı bir yaş
          göstəricisi olaraq qarşılanmış və ən azı 18 yaşa qədər yüksəltməyə
          təşəbbüs göstərilmişdir. Uşaqların silahlı münaqişəyə cəlb olunmasına
          dair Uşaq Hüquqları haqqında Konvensiyaya Əlavə Protokol (2011-ci ilin
          noyabr ayından etibarən 143 tərəfdaş dövlətlə) minimum yaşı 18-ə
          yüksəltdi.
        </p>
      </div>
    </div></div>
  );
}

export default Soldat;
