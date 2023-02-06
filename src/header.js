import React from "react";
import styled from "styled-components";

const ScHeader = styled.header`
  color: whitesmoke;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-image: url(https://media-cdn.t24.com.tr/media/stories/2018/11/raw_samanyolunun-yakininda-cuce-galaksi-kesfedildi_343619328.jpg);
  position: fixed;
  width: 100%;
  height: 150px;
  z-index: 100;
  border-bottom: 3px solid white;

  img {
    width: 10%;
    margin-top: 20px;
  }
`;

export default function Header() {
  return (
    <ScHeader>
      <img
        src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
        alt="NaSa LoGo"
      />
    </ScHeader>
  );
}
