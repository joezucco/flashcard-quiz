import Flashcard from "./Flashcard";

export const FlashcardList = ({ flashcards }) => {
  return (
    <div className='card-grid'>
      {flashcards.map((flashcard) => {
        <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
};

export default FlashcardList;
