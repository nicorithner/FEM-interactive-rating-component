import {
  TYBoxImg,
  TYBoxResult,
  TYBoxResultText,
  TYBoxText,
  TYBoxTitle,
  TYBoxWrapper,
} from "./ThankYouBox.styled";
import thankYouImage from "../../assets/images/illustration-thank-you.svg";
export const ThankYouBox = () => {
  return (
    <TYBoxWrapper>
      <TYBoxImg src={thankYouImage} />
      <TYBoxResult>
        <TYBoxResultText>You selected 4 out of 5</TYBoxResultText>
      </TYBoxResult>
      <TYBoxTitle>Thank you!</TYBoxTitle>
      <TYBoxText>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </TYBoxText>
    </TYBoxWrapper>
  );
};
