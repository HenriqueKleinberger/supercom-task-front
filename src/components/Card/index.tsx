import { Card } from "../../../types";

interface CardProps {
  card: Card;
}

const CardView = ({ card }: CardProps) => {
  return (
    <article>
      <p>{card.title}</p>
      <p>{card.description}</p>
      {/* <p>{card.deadline?.getDate()}</p>
      <p>{card.createdAt?.getDate()}</p> */}
      <p>{card.status}</p>
    </article>
  );
};

export default CardView;
