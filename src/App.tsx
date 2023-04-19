import { useState } from "react";
import { AppWrapper } from "./components/App.styled";
import { RatingBox } from "./components/ratingBox/RatingBox";
import { ThankYouBox } from "./components/thankYouBox/ThankYouBox";

function App() {
  const [tYBoxDisplay, setTYBoxDisplay] = useState(false);
  const [ratingBoxDisplay, setRatingBoxDisplay] = useState(true);

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setRatingBoxDisplay(false);
    setTYBoxDisplay(true);
  };

  return (
    <AppWrapper>
      <RatingBox display={ratingBoxDisplay} handleSubmit={handleSubmit} />
      <ThankYouBox display={tYBoxDisplay} />
    </AppWrapper>
  );
}

export default App;
