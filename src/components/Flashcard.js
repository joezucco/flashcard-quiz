import { useState } from "react";

export const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      {flip ? flashcard.answer : flashcard.question}
    </div>
  );
};

export default Flashcard;
