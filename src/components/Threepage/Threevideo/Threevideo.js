import React,{useState} from "react";
import "./Threevideo.css";
import Footer from "../../Footer/Footer";
import Miska from "../../foto/Miska.jpg";
function Threevideo() {
  const [openModal, setOpenModal] = useState(false);
  const clickVideo = () => {
    setOpenModal(true);
  };
  return (
    <div>
      <div className="threevideo">
        <p  data-aos="fade-up"
              data-aos-offset="-100"
              data-aos-delay="40"
              data-aos-anchor-placement="top-center">Bəzi uşaqlar üçün fantaziya həqiqətdən qaçmaq üçün yeganə yoldur.</p>

        {/* <i class="fas fa-play"></i> */}

        {/* <i id="x" class="fas fa-times"></i> */}
        <div className="iframe"  data-aos="fade-up"
              data-aos-offset="-100"
              data-aos-delay="40"
              data-aos-anchor-placement="top-center">
          {!openModal ? <img id="backdrop" src={Miska} alt="" />:null}
          <iframe
            id="ifr"
            src={"https://www.youtube.com/embed/ZJwcHTo_eVs?"+(openModal&&"autoplay=1&mute=1")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {!openModal?<i onClick={clickVideo} id="btn" class="fas fa-play"></i>:null}
        </div>
        <span  data-aos="fade-up"
              data-aos-offset="-100"
              data-aos-delay="40"
              data-aos-anchor-placement="top-center">
          Dünyada 160 milyon uşaq silahlı qarşıdurma ortasında böyüyür.
          <br /> <br /> Bu zorakılıq atmosferi onların ruhi sağlamlığına birbaşa
          qorxu, narahatlıq və depressiya hissləri daxilində birbaşa mənfi təsir
          göstərir.
          <br /> <br />
          Uşaqları Xilas edin, hər uşağın potensialını tam qazanmasına kömək
          etmək üçün mövcuddur. İngiltərədə və dünyada uşaqların təhlükəsiz,
          sağlam qalmalarına və öyrənməyə davam etmələrinə əmin olduqları üçün
          istədikləri şəxs ola bilərlər. Sətəlcəm, aclıq və müharibədə olan
          uşaqları qorumaq kimi problemlərin həllinə rəhbərlik edirik, eyni
          zamanda hər bir uşağın özünəməxsus ehtiyaclarına diqqət yetirilir.
          Harada böyüdüklərindən asılı olmayaraq, bizə ən çox ehtiyac duyan
          uşaqlara çatmağın yeni yollarını tapırıq. Bunu təkbaşına edə bilmərik.
          Uşaqlar, tərəfdarları və tərəfdaşları ilə birlikdə hər bir uşağın kim
          olmaq istədiyinə kömək etmək üçün çalışırıq.
          <span>
            <br />
            <br />
            Psixososial dəstək müdaxilələrimiz uşaqların və gənclərin
            möhkəmliyini və fitri güclərini inkişaf etdirmələrini təmin etmək
            üçün hazırlanmışdır. Həyat bacarıqları müdaxilələrimizin və
            strukturlaşdırılmış istirahət fəaliyyətlərimizin iştirakçıları
            özlərinə inam və başqalarına inam inkişaf etdirirlər. Valideynlər və
            uşaqların həyatındakı digər əsas yetkinlərlə birlikdə öz rifahlarını
            və uşaqlara qayğı və psixososial dəstək göstərmək imkanlarını
            artırmaq üçün işləyirik.
          </span>
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default Threevideo;
