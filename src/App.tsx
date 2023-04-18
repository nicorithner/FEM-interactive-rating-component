import { AppWrapper } from "./components/App.styled";
import { RatingBox } from "./components/ratingBox/RatingBox";
import { ThankYouBox } from "./components/thankYouBox/ThankYouBox";

function App() {
  return (
    <AppWrapper>
      <RatingBox />
      <ThankYouBox />
    </AppWrapper>
  );
}

export default App;
