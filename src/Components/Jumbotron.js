import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import jumboImage from "../Assets/jumbotronImage.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${jumboImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .video-background {
    position: absolute;
    bottom: 50%;
    right: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1000;
    overflow: hidden;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <video className="video-background" preload autoplay loop muted>
        <source
          src="http://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
      <Container>
        <h1>Welcome</h1>
        <p>Learn</p>
      </Container>
    </Jumbo>
  </Styles>
);
