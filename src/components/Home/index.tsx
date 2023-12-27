import { useState } from "react";
import { Wrapper } from "./styles";
import { Button } from "../../styles";
import CardForm from "../CardForm";
import CardsWrapper from "../CardsWrapper";

const Home = () => {
  const [newCard, setNewCard] = useState(false);

  return (
    <Wrapper>
      {newCard ? (
        <CardForm />
      ) : (
        <Button onClick={() => setNewCard(true)}>Create new card</Button>
      )}
      <CardsWrapper />
    </Wrapper>
  );
};

export default Home;
