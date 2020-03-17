import React from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled'

import settings from './settings';
import primitivetext from './primitive.svg';
import primitiveicon from './punkyicon.svg';

function IntroCard() {
  return (
    <StyledIntroCard>

      <div className="card">
        <TextTop className="mark">{settings.texttop}</TextTop>
        <div className="content ">
          <Company1>{settings.company1}</Company1>
          <Company2>{settings.company2}</Company2>
        </div>
        { /* <div className="mark upside-down"> ¨^<sup>∆¬∫ ˚√≈</sup> </div> */}
        <TextBottom className="mark bottom">{settings.textbottom}</TextBottom>
      </div>

      <Brand>
        <a href="https://primitivedigital.co.uk" alt="Primitive Digital - Design and Development" title="Primitive Digital - Design and Development">
          <img src={primitivetext} className="Primitive Digital" alt="Primitive Digital" />
        </a>
      </Brand>

    </StyledIntroCard>
  );
}

export default IntroCard;


const fadeInCard = keyframes`
  from{
    top: 40px;
    left: -330px;
    opacity: 0;
    transform: scale(1.3) rotate(-60deg);
  }
  20%{
    opacity: 0.1;
  }
  to{
    top:0px;
    left: 0px;
    transform: scale(1) rotate(0deg);
  }
`;

const fadeInDark = keyframes`
  from{
    opacity: 0;
    transform: rotate(72deg) translate(120px, 800px);
  }
  30%{
    opacity: .1;
  }
  to{
    opacity: 1;
    transform: rotate(72deg) translate(75px, 20px);
  }
`;

const fadeInRed = keyframes`
  from{
    opacity: 0;
    transform: rotate(70deg) translate(7px, 800px));
  }
  30%{ opacity: .2; }
  to{
    opacity: 1;
    transform: rotate(58deg) translate(0px, 0px);
  }
`;

const fadeInText = keyframes`
  from{
    opacity: 0;
  }
  to{
    top:50%;
    opacity: 1;
  }
`;

const fadeInMark = keyframes`
  from{ opacity: 0; }
  to{ opacity: 1; }
`;


const StyledIntroCard = styled.div`
  postition: relative;
  overflow: hidden;
  box-sizing(border-box);

  sup { font-size: 50%; }

  .card{
    position:relative;
    margin: 50px auto 50px;
    width: 350px;
    height: 490px;
    background-color: ${settings.color.light};
    background-image: url(${primitiveicon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    border-radius: 12px;
    box-shadow: 1px 1px 6px rgba(0,0,0,0.25);
    overflow: hidden;
    color: ${settings.color.white};
    animation: ${fadeInCard} .9s ease-out forwards;
  }
  .card:before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -50px;
    background: ${settings.color.dark};
    opacity: 0;
    border-left: solid 250px #664C4F;
    animation: ${fadeInDark} .8s 1s forwards;

  }
  .card:after{
    content: "";
    position: absolute;
    top: -50px;
    bottom: -50px;
    left: 50px;
    right: 50px;
    background: ${settings.color.primarymute};
    opacity: 0;
    animation: ${fadeInRed} .8s 1.5s forwards;
  }
  
  .content{
    z-index: 10;
    position: absolute;
    top: 40%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    animation: ${fadeInText} 1.2s .1s forwards;
    animation-delay: 1500ms;

  }

  .mark.upside-down{
    transform: rotate(180deg);
    top: auto;
    left: auto;
    bottom: 16px;
    right: 24px;
    color: ${settings.color.primary};

  }
  .mark.upside-down:after {
    color: ${settings.color.light};
  }




`;


const TextTop = styled.div`

  position: absolute;
  padding: 0;
  font-size: 40px;
  font-weight: bold;
  color: ${settings.color.primary};
  background-color: transparent;
  top: 18px;
  left: 15px;
  opacity: 0;
  animation: ${fadeInMark} .8s .5s forwards;
  animation-delay: 1500ms;

  /*
  &:after{
    content: "\f141";
    font-family: "Ionicons";
    display: block;
    padding-left: 5px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    text-rendering: auto;
    font-size: 30px;
    letter-spacing: 5px;
    color: ${settings.color.primary};
  }
  */

`;
const TextBottom = styled.div`

  position: absolute;
  padding: 0;
  bottom: 18px;
  right: 15px;
  font-size: 30px;
  font-weight: bold;
  color: ${settings.color.primary};
  background-color: transparent;

  opacity: 0;
  animation: ${fadeInMark} .8s .5s forwards;
  animation-delay: 1500ms;

  /*
  &:before {
      content: "\f141";
      font-family: "Ionicons";
      display: block;
      text-align: right;
      padding-left: 5px;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      text-rendering: auto;
      font-size: 30px;
      letter-spacing: 5px;
      color: ${settings.color.primary};
  }
  */
 
`;

const Company1 = styled.h1`
  margin:0;
  padding: 3px;
  font-size:60px;
  line-height:40px;
`;

const Company2 = styled.h2`
  margin:0;
  padding: 4px 3px 3px 7px;
  font-size:36px;
  line-height:36px;
  color:${settings.color.dark};
`;

const Brand = styled.div`
  margin: -20px auto 0;
  height: 50px;
  width: 200px;
  padding: 0 10px 20px;
  opacity: .5;
`;
