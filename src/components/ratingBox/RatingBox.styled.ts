import styled from "styled-components";
import { NEUTRAL, PRIMARY } from "../../constants";
import { BoxWrapper } from "../App.styled";

type Props = {
  display: string;
};

export const RBWrapper = styled(BoxWrapper)<Props>`
  display: ${(p) => p.display};
  align-items: flex-start;
`;

export const StarIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${PRIMARY.darkBlue};
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 400px) {
    width: 40px;
    height: 40px;
    padding: 13.5px;
  }
`;

export const StarIcon = styled.img`
  height: 16px;

  @media only screen and (max-width: 400px) {
    height: 14px;
  }
`;

export const TextWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 24px;
  width: 340px;

  @media only screen and (max-width: 400px) {
    width: auto;
    margin-top: 16px;
    margin-bottom: auto;
  }
`;

export const RBTitle = styled.h2`
  color: ${NEUTRAL.white};
  font-family: "Overpass";
  font-style: normal;
  font-weight: 700;
  font-size: ${28 / 16}rem;
  line-height: ${35 / 16}rem;
  margin-bottom: 15px;

  @media only screen and (max-width: 400px) {
    font-size: ${24 / 16}rem;
    line-height: ${30 / 16}rem;
  }
`;

export const RBDescription = styled.p`
  color: ${NEUTRAL.lightGray};
  font-family: "Overpass";
  font-style: normal;
  font-weight: 400;
  font-size: ${16 / 16}rem;
  line-height: ${24 / 16}rem;

  @media only screen and (max-width: 400px) {
    font-size: ${14 / 16}rem;
    line-height: ${22 / 16}rem;
  }
`;

export const RBNumbersRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;

  @media only screen and (max-width: 400px) {
    width: 279px;
  }
`;

export const RBNumberCircle = styled.button`
  background: ${PRIMARY.darkBlue};
  color: ${NEUTRAL.mediumGray};
  width: 51px;
  height: 51px;
  font-family: "Overpass";
  font-style: normal;
  font-weight: 700;
  font-size: ${16 / 16}rem;
  line-height: ${24 / 16}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${PRIMARY.orange};
    color: ${NEUTRAL.white};
  }

  &:focus {
    background: ${NEUTRAL.mediumGray};
    color: ${NEUTRAL.white};
  }

  @media only screen and (max-width: 400px) {
    width: 42px;
    height: 42px;
  }
`;

export const RBSubmitButton = styled.button`
  margin-top: 32px;
  background: ${PRIMARY.orange};
  border: none;
  color: ${NEUTRAL.white};
  width: 341px;
  height: 45px;
  border-radius: 22.5px;
  font-family: "Overpass";
  font-style: normal;
  font-weight: 700;
  font-size: ${16 / 16}rem;
  line-height: ${19 / 16}rem;
  letter-spacing: ${2 / 16}rem;
  cursor: pointer;

  &:hover {
    background: ${NEUTRAL.white};
    color: ${PRIMARY.orange};
  }

  @media only screen and (max-width: 400px) {
    margin-top: auto;
    width: 279px;
    height: 45px;
    font-size: ${14 / 16}rem;
    line-height: ${45 / 16}rem;
  }
`;
