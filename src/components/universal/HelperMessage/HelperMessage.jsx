import "./HelperMessage.css";
import React from "react";
const HelperMessage = ({ messageContent }) => {
  return (
    <div className="HelperMessage">
      <p>{messageContent}</p>
    </div>
  );
};

export default HelperMessage;
