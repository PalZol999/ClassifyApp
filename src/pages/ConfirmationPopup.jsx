import React from "react";
import "../styles/ConfirmationPopup.css"; // Create or adjust this CSS file for styling

const ConfirmationPopup = ({ show, onYes, onNo }) => {
  if (!show) return null;

  return (
    <div className="popup-container">
      <div className="popup-content">
        <p>Do you want to add yourself to this class?</p>
        <button className="popup-button" onClick={onYes}>Yes</button>
        <button className="popup-button" onClick={onNo}>No</button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
