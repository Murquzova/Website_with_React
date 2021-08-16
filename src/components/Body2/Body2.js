import React from "react";
import "./Body2.css";
import Fotka from "../foto/a.jpg";
import Fotka2 from "../foto/a2.jpg";
import Fotka3 from "../foto/sss5.jfif";
import Fotka4 from "../foto/unna.jpg";

function Body2() {
  return (
      <div className="body2">
     
      <div className="body22">
        <img src={Fotka3} alt="Lol" />
        <div>
          <span>
            Dünyada yaşayan təqribən 2 milyard uşaqdan 600 milyonu, yəni
            dünyadakı uşaqların 30%-i yoxsulluqdan əziyyət çəkir.
            <br />
            <br />
            Bunun də əsas səbəblərindən biri mənasız silahlı münaqişələrdir.
            Əlbəttə, bu, aclıq, epidemiyalar, təhsilsizlik kimi problemləri də
            özü ilə gətirir.
          </span>
          <br />
          <br />
          <p>Dünyada 150 milyona yaxın uşaq heç məktəbə getmir.</p>
          <br />
          <p>Dünyada 400 minə yaxın uşaq əsgər var.</p>
          <br />
          <p>600 milyona yaxın uşaq təhlükəli döyüş bölgələrində yaşayır.</p>
        </div>
      </div>
      <br />
      <p>
        Nəticədə, hər il milyonlarla uşaq həlak olur və ya şikəst qalır,
        qalanları isə həyatını əzab-əziyyət və bədbəxtlik içində keçirir. Bu
        günə qədər aclıq, xəstəlik, baxımsızlıq səbəbi ilə ölən uşaqların sayı
        milyonlarladır.
      </p>
    </div>
  );
}

export default Body2;
