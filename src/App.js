import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Please reconsider your decision",
  "Please please please",
  "I'm so sad...",
  "I'm gonna cry...",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media1.tenor.com/m/cJwuW3Z1CzUAAAAC/bubu-dudu-kisses.gif"
          />
          <div className="text"> Yay!!! </div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://media.tenor.com/N7GiO8UsfooAAAAi/bubu-dudu-heart.gif"
          />

          <div> Will you be my valentine? </div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
