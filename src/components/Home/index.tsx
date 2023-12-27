import { useState } from "react";
import { Wrapper } from "./styles";
import CardForm from "../CardForm";
import CardsWrapper from "../CardsWrapper";

const Home = () => {
  const [newCard, setNewCard] = useState(false);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Home;
