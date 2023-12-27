import { useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { getCards } from "../../features/cards/cards-slice";
import CardForm from "../CardForm";
import CardsWrapper from "../CardsWrapper";

const Home = () => {
  const [newCard, setNewCard] = useState(false);

  return (
    <>
      <button onClick={() => setNewCard(true)}>Create new card</button>
      {newCard && (
        <CardForm
          createCard={(e: React.FormEvent) => {
            e.preventDefault();
            console.log("salvar");
            setNewCard(false);
          }}
        />
      )}
      <CardsWrapper />
    </>
  );
};

export default Home;
