import React from "react";
import "./SingleCard.sass";

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card" />
        <img
          className="back"
          src="https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_960_720.jpg"
          onClick={handleClick}
          alt="cover"
        />
      </div>
    </div>
  );
}

export default SingleCard;
