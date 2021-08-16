import React from "react";
import "./Iane.css";
import Deti from "../../../foto/deti.jpg";
function Iane() {
  return (
    <div className="iane">
      <div className="ianefoto">
        <img className="ianeimg" src={Deti} alt="" />
      </div>
      <div >
        <p>
          İstər pul bağışlayın, istər marafon keçirin, istər dükanda könüllü
          olun, istər millət vəkilinizə e-poçt göndərin, istərsə də axmaq bir
          tullanan qoyun, vaxtınız və ianəniz uşağın gələcəyini dəyişdirə bilər.
        </p>
        <br />
              <p>Uşaqların həyatını qurtarmaq və dəyişdirmək üçün kömək edin!</p>
              <br />
        <p>
                  Bağışlarınızla dünyanın 190-dan çox ölkəsində uşaqların sağ qalmasını,
                  qorunmasını və inkişafını təmin edirsiniz. Uşaqları harada, kim
                  olduqları və köməyimizə ehtiyac olduqları zaman qorumaq üçün əlimizdən
                  gələni edəcəyik.
        </p>
              <button>Iane Et</button>
      </div>
    </div>
  );
}

export default Iane;
