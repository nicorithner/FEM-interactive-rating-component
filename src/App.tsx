import { useState } from "react";
import { AppWrapper } from "./components/App.styled";
import { RatingBox } from "./components/ratingBox/RatingBox";
import { ThankYouBox } from "./components/thankYouBox/ThankYouBox";

function App() {
  const [tYBoxDisplay, setTYBoxDisplay] = useState(false)

  return (
    <AppWrapper>
      <RatingBox />
      <ThankYouBox display={tYBoxDisplay}/>
    </AppWrapper>
  );
}

export default App;
