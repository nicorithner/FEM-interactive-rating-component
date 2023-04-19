import styled from "styled-components";
import { GRADIENTS, PRIMARY } from "../constants";

export const AppWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${PRIMARY.blackPearl};
`;

export const BoxWrapper = styled.section`
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
