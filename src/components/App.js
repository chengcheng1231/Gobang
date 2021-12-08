import styled from "styled-components";

export const GameIntro = styled.div``;

export const Game = styled.div`
  display: flex;
  justify-content: center;
  margin: 10vh auto;
  width: 85vw;
  position: relative;
  border-top: 0.5rem solid rgb(46, 46, 46);
  font-family: "Rubik", sans-serif;
  padding: 40px 0px;

  &:before {
    content: "DESIGNED BY YU-CHENG";
    font-weight: bold;
    color: rgb(46, 46, 46);
    font-size: 16px;
    position: absolute;
    top: -40px;
    left: 0px;
  }

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: flex-start;
    width: 85vw;
  }
`;

export const GameTitle = styled.div`
  font-size: 35px;
  font-weight: bold;
  width: 600px;
  margin: 0px 30px;
  @media (max-width: 1050px) {
    width: initial;
  }
`;

export const GameDescription = styled.div`
  padding: 10px 0px;
  font-size: 20px;
  letter-spacing: 0.2em;
  width: 600px;
  margin: 0px 30px;
  @media (max-width: 1050px) {
    width: initial;
  }
`;
