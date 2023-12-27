import { Card } from "../../../types";
import { Article } from "./style";
interface CardProps {
  card: Card;
}

const CardView = ({ card }: CardProps) => {
  return (
    <Article>
      <p>{card.title}</p>
      {/* <p>{card.deadline?.getDate()}</p>
      <p>{card.createdAt?.getDate()}</p> */}
    </Article>
  );
};

export default CardView;
