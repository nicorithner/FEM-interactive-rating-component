import {
  RBDescription,
  RBNumberCircle,
  RBNumbersRow,
  RBSubmitButton,
  RBTitle,
  RBWrapper,
  StarIcon,
  StarIconWrapper,
  TextWrapper,
} from "./RatingBox.styled";
import starIcon from "../../assets/images/icon-star.svg";

type Props = {
  display: boolean;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const RatingBox = (props: Props) => {
  return (
    <RBWrapper display={props.display ? "flex" : "none"}>
      <StarIconWrapper>
        <StarIcon src={starIcon} alt="Thank you image" />
      </StarIconWrapper>
      <TextWrapper>
        <RBTitle>How did we do?</RBTitle>
        <RBDescription>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </RBDescription>
      </TextWrapper>
      <RBNumbersRow>
        <RBNumberCircle>1</RBNumberCircle>
        <RBNumberCircle>2</RBNumberCircle>
        <RBNumberCircle>3</RBNumberCircle>
        <RBNumberCircle>4</RBNumberCircle>
        <RBNumberCircle>5</RBNumberCircle>
      </RBNumbersRow>
      <RBSubmitButton onClick={props.handleSubmit}>SUBMIT</RBSubmitButton>
    </RBWrapper>
  );
};
