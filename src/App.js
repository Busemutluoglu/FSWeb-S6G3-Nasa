import React from "react";
import "./App.css";
import Header from "./header";
import { useEffect, useState } from "react";
import axios from "axios";
import Main from "./main";
import Tarih from "./tarih";
import styled from "styled-components";

const dummy = {
  date: "2023-02-05",
  explanation:
    "This moon is shining by the light of its planet. Specifically, a large portion of Enceladus pictured here is illuminated primarily by sunlight first reflected from the planet Saturn. The result is that the normally snow-white moon appears in the gold color of Saturn's cloud tops.  As most of the illumination comes from the image left, a labyrinth of ridges throws notable shadows just to the right of the image center, while the kilometer-deep canyon Labtayt Sulci is visible just below. The bright thin crescent on the far right is the only part of Enceladus directly lit by the Sun. The featured image was taken in 2011 by the robotic Cassini spacecraft during a close pass by by the enigmatic moon.  Inspection of the lower left part of this digitally sharpened image reveals plumes of ice crystals thought to originate in a below-surface sea.",
  hdurl: "https://apod.nasa.gov/apod/image/2302/enceladus12_cassini_960.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Enceladus by Saturnshine",
  url: "https://apod.nasa.gov/apod/image/2302/enceladus12_cassini_960.jpg",
};
const ScDiv = styled.div`
  background-image: url(https://media-cdn.t24.com.tr/media/stories/2018/11/raw_samanyolunun-yakininda-cuce-galaksi-kesfedildi_343619328.jpg);
  font-weight: bold;
`;

function App() {
  const [data, setData] = useState(dummy);
  const [tarih, setTarih] = useState("2023-02-05");
  const changeHandler = (e) => {
    setTarih(e);
  };
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=aQittZMbb3oCvCwjYHKd0fnhM2CuJEc67R6laK8n&date=" +
          tarih
      )
      .then((response) => {
        setData(response.data);
      });
  }, [tarih]);

  // function tarihDegistirme(tarih) {
  //   let gun = new Date(tarih);
  //   const day = gun.getDate();
  //   const month = gun.getMonth() + 1;
  //   const year = gun.getFullYear();

  //   let sonTarih = `${year}-${month}-${day}`;
  //   setTarih(sonTarih);
  // }

  return (
    <ScDiv className="App">
      <Header />
      <Tarih tarih={tarih} changeHandler={changeHandler} />
      <Main data={data} />
    </ScDiv>
  );
}

export default App;
