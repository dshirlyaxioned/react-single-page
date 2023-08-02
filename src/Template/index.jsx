import React from "react";

import { MainConatiner, BodyContainer } from "./Template.styled";

import BannerBack from '../assets/banner-back.png';
import BannerFront from '../assets/banner-front.png';

const Template = () => {
  return (
    <MainConatiner>
      <div className="header">
        <h1>
          <a href="#fixme">Ready</a>
        </h1>
        <div className="header-right">
          <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
          </ul>
          <div>
            <a href="#fixme">get ready</a>
          </div>
        </div>
      </div>
      <BodyContainer>
        <div className="heading">
          <span>your new calendar</span>
          <h2>
            The calendar you <span>need to meet</span>
          </h2>
          <p>
            Ready evolves your calendar into a living, breathing multiplayer
            workspace for teams to instantly make your meetings better.
          </p>
        </div>
        <div className="banner-images">
          <figure>
            <img src={BannerBack} alt="Banner back" />
          </figure>
          <figure>
            <img src={BannerFront} alt="Banner Front" />
          </figure>
        </div>
      </BodyContainer>
    </MainConatiner>
  );
};

export default Template;
