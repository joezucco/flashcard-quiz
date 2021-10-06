import { useState } from "react";

export const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
  return <div>{flashcard.question}</div>;
};

export default Flashcard;
