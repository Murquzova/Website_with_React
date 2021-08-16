import React, { Children } from "react";
import "./HeadBod.css";
import Body from "../Body/Body";
import Body2 from "../Body2/Body2";
import Movie from "../Movie/Movie";
import Footer from "../Footer/Footer";
import Volonter from "../Volonter/Volonter";
import Deti from "../Deti/Deti";
import Number from "../Numbers/Number";
import Text from "../Text/Text";
import Meqsed from "../Threepage/Meqsed/Meqsed";
import Whatwedo from "../Whatwedo/Whatwedo";
function HeadBod() {
  return (
    <div>
      <div className="backimage">
        <p className="pteg">
          Uşaqlar müharibələrdə deyil, sevgi ilə böyüməlidir!
        </p>
      </div>
      <Whatwedo />
      <Deti />
      <Body />
      {/* <Number/> */}
      {/* <Body2 /> */}
      <Text />
      <Meqsed />
      <Movie />
      {/* <Volonter /> */}
      <Footer />
    </div>
  );
}

export default HeadBod;
