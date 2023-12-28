import { Card, Status } from "../../../types";
import { Cards, StatusWrapper, Label } from "./styles";
import { useFetchCardsQuery } from "../../features/cards/cards-api-slice";
import CardView from "../CardView";
import CardLoading from "../CardLoading";

interface ICardsTypeProps {
  label: Status;
  cards: Card[];
}

const CardsType = ({ label, cards = [] }: ICardsTypeProps) => {
  const { isFetching } = useFetchCardsQuery();
  return (
    <StatusWrapper $status={label}>
      <Label>{label}</Label>
      <Cards>
        {isFetching ? (
          <CardLoading />
        ) : (
          cards.map((card) => <CardView key={card.id} card={card} />)
        )}
      </Cards>
    </StatusWrapper>
  );
};

export default CardsType;
