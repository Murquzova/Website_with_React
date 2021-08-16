import React from 'react'
import "./Volonter.css"
function Volonter() {
    return (
        <div className="volonter">
            <p>Volonter olaraq qatilmaq isteseniz awgidaki weyi doldurun ve biz sizinle elaqe saxlayacaz!</p>
            <br />
          <label> Adinizi qeyd edin:  </label>
                <input type="text" placeholder="Ad" /> 
            <br />
            <label> Soyadinizi qeyd edin:  </label>
            <input type="text" placeholder="Soyad" />
            <br />
            <label> Mail qeyd edin:  </label>
            <input type="text" placeholder="email" />
            <span>En qisa zamanda geri donuw olacaq.</span>
            <button className="volonbut">Gonder</button>
        </div>
    )
}

export default Volonter
