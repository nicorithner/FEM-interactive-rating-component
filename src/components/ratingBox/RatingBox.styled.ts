import styled from "styled-components";
import { GRADIENTS, NEUTRAL, PRIMARY } from "../../constants";

export const RBWrapper = styled.section`
  border: 1px solid black;
  background: ${GRADIENTS.blackPearlGradient};
  height: 416px;
  width: 412px;
  border-radius: 30px;
  padding: 32px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;

export const StarIcon = styled.img`
  height: 16px;
  widht: auto;
`;

export const TextWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 24px;
  width: 340px;
`;

export const RBTitle = styled.h2`
  color: ${NEUTRAL.white};
  font-family: "Overpass";
  font-style: normal;
  font-weight: 700;
  font-size: ${28 / 16}rem;
  line-height: ${35 / 16}rem;
  margin-bottom: 15px;
`;

export const RBDescription = styled.p`
  color: ${NEUTRAL.lightGray};
  font-family: "Overpass";
  font-style: normal;
  font-weight: 400;
  font-size: ${16 / 16}rem;
  line-height: ${24 / 16}rem;
`;

export const RBNumbersRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
`;

export const RBNumberCircle = styled.div`
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
`;
