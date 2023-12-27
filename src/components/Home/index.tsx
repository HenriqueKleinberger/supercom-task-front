import { useState } from "react";
import { useFetchCardsQuery } from "../../features/cards/cards-api-slice";
import { usePostCardMutation } from "../../features/cards/cards-api-slice";
import { Wrapper } from "./styles";
import { Button } from "../../styles";
import CardForm from "../CardForm";
import CardsWrapper from "../CardsWrapper";
import { Card } from "../../../types";

const Home = () => {
  const [newCard, setNewCard] = useState(false);
  const { data = [], isFetching } = useFetchCardsQuery();
  const [postCard, { isLoading }] = usePostCardMutation();

  const save = (card: Card) => {
    postCard(card);
    setNewCard(false);
  };

  return (
    <Wrapper>
      {newCard ? (
        <CardForm save={save} />
      ) : (
        <Button onClick={() => setNewCard(true)}>Create new card</Button>
      )}
      <CardsWrapper cards={data} />
    </Wrapper>
  );
};

export default Home;
