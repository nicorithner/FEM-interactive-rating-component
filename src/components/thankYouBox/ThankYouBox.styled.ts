import styled from "styled-components";
import { GRADIENTS, NEUTRAL, PRIMARY } from "../../constants";
import { BoxWrapper } from "../App.styled";

type Props = {
  display: string
}

export const TYBoxWrapper = styled(BoxWrapper)<Props>`
  display: ${(p) => p.display};
  align-items: center;
`;

export const TYBoxImg = styled.img`
  width: 162px;
  height: 108px;
`;
export const TYBoxResult = styled.div`
  background: ${PRIMARY.darkBlue};
  width: 193px;
  height: 32px;
  border-radius: 22.5px;
`;
export const TYBoxResultText = styled.p`
  color: ${PRIMARY.orange};
  line-height: ${32 / 16}rem;
  font-family: "Overpass";
  font-style: normal;
  font-weight: 400;
  font-size: ${16/16}rem;
  text-align: center;
`;
export const TYBoxTitle = styled.h1`
  color: ${NEUTRAL.white};
  font-family: "Overpass";
  font-style: normal;
  font-weight: 700;
  font-size: ${28 / 16}rem;
  line-height: ${35 / 16}rem;
`;
export const TYBoxText = styled.p`
  color: ${NEUTRAL.lightGray};
  font-family: "Overpass";
  font-style: normal;
  font-weight: 400;
  font-size: ${16 / 16}rem;
  line-height: ${24 / 16}rem;
  text-align: center;
`;
