import CardView from "../CardView";
import { Card, Status } from "../../../types";
import { Cards, StatusWrapper, Label } from "./styles";

interface ICardsTypeProps {
  label: Status;
  cards: Card[];
}

const CardsType = ({ label, cards = [] }: ICardsTypeProps) => {
  return (
    <StatusWrapper $status={label}>
      <Label>{label}</Label>
      <Cards>
        {cards.map((card) => (
          <CardView key={card.id} card={card} />
        ))}
      </Cards>
    </StatusWrapper>
  );
};

export default CardsType;
