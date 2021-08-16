import React from "react";
import "./Donate.css";
import Footer from "../Footer/Footer"
import InputMask from "react-input-mask";
function Donate() {
  const clickActive = (e) => {
    if (document.querySelector(".activebtn"))
      document.querySelector(".activebtn").classList.remove("activebtn");
    e.target.classList.add("activebtn");
  };
  return (
    <div>
    <div className="donate">
      <div>
        <div className="iane">
          <h1>İANƏ EDƏK</h1>
        </div>
        <div className="leftright">
          <div className="leftdonate">
            <div>
              <b>Ödəmək istədiyiniz məbləğ:</b>
            </div>
            <div>
              <button onClick={clickActive}>50₼</button>
              <button onClick={clickActive}>100₼</button>
            </div>
            <div>
              <button onClick={clickActive}>500₼</button>
              <button onClick={clickActive}>1000₼</button>
            </div>
            <br />
            <div>
              <p>Başqa məbləğ:</p>
            </div>
            <div className="valut">
              <input type="text" placeholder="Başqa məbləğ" />
              <select name="" id="">
                <option value="">$</option>
                <option value="">₼</option>
              </select>
            </div>
            <br />
            <div>
              <p>Reyləriniz və istəkləriniz:</p>
            </div>
            <textarea name="" id="" cols="70" rows="9"></textarea>
          </div>
          <div className="rightdonate">
            <div>
              <label>
                Adınız nədir?
                <input type="text" />
              </label>
            </div>
            <br />
            <div>
              <label>E-mail:
              <input type="text" />
              </label>
              
            </div>
            <br />
            <div>
              <b> Ödəniş məlumatları</b>
              <br />
              <div>
                <p>Kartın nömrəsi</p>
                <InputMask mask="9999-9999-9999-9999" />
              </div>
            </div>
            <br />
            <div>
              <div className="karta">
                <div>
                  <p>Bitme tarixi</p>
                  
                  <input className="cvv" type="text" placeholder="00/00" />
                </div>
                <div>
                  <p>CVV/CVC</p>
                  <input className="cvv" type="text" placeholder="000" />
                </div>
              </div>
            </div>
            <br />
            <div>
              <div>
                <div>
                  <label>
                    <input type="checkbox" />
                    Fontdan mesaj almaq istiyirem
                  </label>
                  <br />
                  
                  <label> <input type="checkbox" />Mən şərtləri qəbul edirəm və təsdiq edirəm</label>
                </div>
              </div>
            </div>
            <div className="odebutton">
              <button>ÖDƏ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Donate;
