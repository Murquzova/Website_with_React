import React from "react";
import "./Qonulluol.css";
function Qonulluol() {
  return (
    <div className="qonulluol">
      <div>
        <h2>Qonullu ol</h2>
        <p>
          Könüllülük missiyamızı dəstəkləmək və göstərə biləcəyiniz təsiri ilk
          əldən görmək üçün əla bir yoldur. Bölgənizdəki könüllü imkanları
          haqqında məlumat almaq üçün Könüllü düyməsini vurun, formanı doldurun
          və sizinlə əlaqə quracağıq!
        </p>
      </div>
      <div>
        <div>
          <label>
            Ad:
            <input type="text" />
          </label>
        </div>
        <br />
        <div>
          <label>
            Soyad:
            <input type="text" />
          </label>
        </div>
        <br />
        <div>
          <label>
            Unvan:
            <input type="text" />
          </label>
        </div>
        <br />
        <div>
          <label>
            Elaqe nomresi:
            <input type="text" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Qonulluol;
