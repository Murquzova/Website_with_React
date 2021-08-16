import React from "react";
import "./Konullu.css";
import Konull from "../../../foto/konull.jpg";
function Konullu() {
  return (
    <div className="konullu">
      <div className="konullufoto">
        <img className="konulluimg" src={Konull} alt="" />
      </div>
      <div>
        <p>
          Könüllülük missiyamızı dəstəkləmək və edə biləcəyiniz təsiri ilk əldən
          görmək üçün əla bir yoldur. Bölgənizdəki könüllü imkanları haqqında
          məlumat əldə etmək üçün Könüllü düyməsini vurun, formanı doldurun və
          sizinlə əlaqə quracağıq!
        </p>
        <button>Könüllü Ol</button>
      </div>
    </div>
  );
}

export default Konullu;
