import { useState } from "react";
import { AppWrapper } from "./App.styled";
import { RatingBox } from "./ratingBox/RatingBox";
import { ThankYouBox } from "./thankYouBox/ThankYouBox";

function App() {
  const [tYBoxDisplay, setTYBoxDisplay] = useState(false);
  const [ratingBoxDisplay, setRatingBoxDisplay] = useState(true);
  const [rating, setRating] = useState("5");

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setRatingBoxDisplay(false);
    setTYBoxDisplay(true);
  };

  const getRating = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let number: any = event.currentTarget.textContent;
    setRating(number);
  };

  return (
    <AppWrapper>
      <RatingBox
        display={ratingBoxDisplay}
        handleSubmit={handleSubmit}
        getRating={getRating}
      />
      <ThankYouBox rating={rating} display={tYBoxDisplay} />
    </AppWrapper>
  );
}

export default App;
