import React from "react";
import styled from "styled-components";

const ScHero = styled.div`
  .Special {
    color: antiquewhite;
    background-color: grey;
    width: 15%;
    height: 30px;
    text-align: center;
    padding: 10px;
    border-radius: 20px;
    font-size: 20px;
    margin-top: 200px;
  }
`;
export default function Tarih(props) {
  const { changeHandler, tarih } = props;
  return (
    <ScHero>
      <input
        value={tarih}
        className="Special"
        type="date"
        onChange={(ev) => changeHandler(ev.target.value)}></input>
    </ScHero>
  );
}
