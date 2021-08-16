import React from "react";
import "./Movie.css";
import Video from "../Header/video/child.mp4";

function Movie() {
  return (
    <div className="movie">
      <div    data-aos="fade-up"
          data-aos-offset="-100"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center">
        <p>
                  Sevgi dünyada ən gözəl nemətdir, biz ağıllı insanlar həyata sevgi ilə
          baxa biləcəyimiz halda, niyə müharibələr yaşanmalıdır ki?</p>
              <br />
          <p> Ən əsası,
          dünyanın ən saf varlıqları olan uşaqlar müharibələrin qurbanları
          olmamalıdır.
        </p>
        <button>Könüllü Ol</button>
      </div>
      <div    data-aos="fade-up"
          data-aos-offset="-100"
          data-aos-delay="40"
          data-aos-anchor-placement="top-center" className="childvideo">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Movie;
