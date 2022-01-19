import React, { useState, useEffect } from "react";
import "./App.sass";
import SingleCard from "./components/SingleCard";

const cardImg = [
  { src: "https://media1.giphy.com/media/TmngSmlDjzJfO/giphy.gif?cid=ecf05e47ulidkxcp1jr5qxnqt7l1spqdfq8sbj4qef2zf66a&rid=giphy.gif&ct=g", matched: false },
  { src: "https://media4.giphy.com/media/l4FGpP4lxGGgK5CBW/giphy.gif?cid=ecf05e47l7sscbc9thwnoseh16zezvlxvjowdwfeq3befquy&rid=giphy.gif&ct=g", matched: false },
  { src: "https://media3.giphy.com/media/pm4VOSkAgkj3q/giphy.gif?cid=ecf05e471k2ppn2cic710bllby4ap2tppy8zr67gyx3o3nxq&rid=giphy.gif&ct=g", matched: false },
  { src: "https://media0.giphy.com/media/7LWfw5uhmHueY/giphy.gif?cid=ecf05e47nirhnjmj11j4mkh9ye9x378rz4c8sqy5iofn3ekf&rid=giphy.gif&ct=g", matched: false },
  { src: "https://media3.giphy.com/media/ZqlvCTNHpqrio/giphy.gif?cid=ecf05e47ud48azydaiha18lvqtwzns5fa37ppoeqnu63moch&rid=giphy.gif&ct=g", matched: false },
  { src: "https://media3.giphy.com/media/AjwVP30OOhZewxzcWh/giphy.gif?cid=ecf05e47dqhmr48x4k9ev04njw30t3pmbwfcjcqljwne7or2&rid=giphy.gif&ct=g", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle
  const shuffleCards = () => {
    const shuffledCards = [...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choice
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //start new game
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>Memorie</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>

      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
