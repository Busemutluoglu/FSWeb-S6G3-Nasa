import React from "react";
import styled from "styled-components";

const ScDiv = styled.div`
  background-color: antiquewhite;
  opacity: 0.6;
  width: 70%;
  margin: auto;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;

  img {
    width: 40%;
    height: 50vh;
  }
  p {
    margin: auto;
    width: 20%;
    padding: 70px;
    background-color: grey;
  }
  h4 {
    padding: 50px;
  }
`;

export default function Main(props) {
  const { data } = props;
  return (
    <ScDiv>
      <main>
        <h4>{data.title}</h4>
        <img url={data.url} />
        <h2>{data.copyright}</h2>
        <h3>{data.date}</h3>
        <p>{data.explanation}</p>
      </main>
    </ScDiv>
  );
}
