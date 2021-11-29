import React, { useEffect, useRef } from "react";

import "./DifficultySelectionModal.css";

import Button from "../Button/Button.js";

const DifficultySelectionModal = ({
  closeModal,
  handleNewGame,
  easyMaxEmptyCells,
  mediumMaxEmptyCells,
  hardMaxEmptyCells
}) => {
  
  console.log("rendering....");
  const bodyContainer = useRef(null);

  // Use Effect for the animation
  useEffect(() => {
    
    


    bodyContainer.current.style.visibility = 'visible';

 
  }, []);


  return (
    <div className="DifficultySelectionModal">
      <div className="modal-container">
        <div className="modal-close-btn-container">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="modal-title">
          <h1>Difficulty Mode</h1>
        </div>
        <div className="difficulty-modal-body" ref={bodyContainer}>
          <div className="difficulty-selection-container">
            <div className="difficulty easy" onClick={() => handleNewGame(easyMaxEmptyCells)}>
              <div
                className="animation-container-difficulty"
                id="easyDifficultyAnimation"
              ></div>
              <p>Easy</p>
            </div>

            <div
              className="difficulty medium"
              onClick={() => handleNewGame(mediumMaxEmptyCells)}
            >
              <div
                className="animation-container-difficulty"
                id="mediumDifficultyAnimation"
              ></div>
              <p>Medium</p>
            </div>

            <div className="difficulty hard" onClick={() => handleNewGame(hardMaxEmptyCells)}>
              <div
                className="animation-container-difficulty"
                id="hardDifficultyAnimation"
              ></div>
              <p>Hard</p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <Button
            onClick={closeModal}
            buttonStyle="btn--primary--solid"
            text="Back"
          />
        </div>
      </div>
    </div>
  );
};

export default DifficultySelectionModal;
