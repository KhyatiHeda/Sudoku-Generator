import React, { useEffect } from "react";
import lottie from "lottie-web";

import "./GameDetails.css";

import Button from "../Button/Button.js";

const GameDetails = ({
  closeModal,
  movesTaken,
  hintsTaken,
  startTime,
  isPlayerWon,
  gameMode,
  mediumMaxEmptyCells,
  hardMaxEmptyCells,
}) => {

  let gameModeName = "Easy";
  if(gameMode === mediumMaxEmptyCells) gameModeName = "Medium";
  else if(gameMode === hardMaxEmptyCells) gameModeName = "Hard";

  return (
    <div className="GameDetails">
      <div className="modal-container">
        <div className="modal-close-btn-container">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="modal-title">
          <h1>Game Details</h1>
        </div>
        <div className="modal-body">
          
          {isPlayerWon && <p>You Won !</p>}
          {!isPlayerWon && <p>Keep Playing you will surely complete it!</p>}
          <p>Game mode: {gameModeName}</p>
          <p>Moves Played: {movesTaken}</p>
          <p>Hints Taken: {hintsTaken}</p>
          <small>Started at: {startTime.split("GMT")[0]}</small>
        </div>
        <div className="modal-footer">
          <Button
            onClick={closeModal}
            buttonStyle="btn--primary--solid"
            text="Continue"
          />
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
