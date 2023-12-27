import CardView from "../Card";
import { Card } from "../../../types";
import { Cards, Status, Label } from "./styles";

interface ICardsTypeProps {
  label: string;
  cards: Card[];
}

const CardsType = ({ label, cards = [] }: ICardsTypeProps) => {
  return (
    <Status>
      <Label>{label}</Label>
      <Cards>
        {cards.map((card) => (
          <CardView card={card} />
        ))}
      </Cards>
    </Status>
  );
};

export default CardsType;
