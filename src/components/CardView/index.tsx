import { FaRegEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Card } from "../../../types";
import { Article, Details, Delete } from "./style";
import { useDeleteCardMutation } from "../../features/cards/cards-api-slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCard } from "../../features/cards/card-slice";

interface CardProps {
  card: Card;
}

const CardView = ({ card }: CardProps) => {
  const dispatch = useAppDispatch();
  const isEditing = useAppSelector((state) => state.card.isEditing);
  const [deleteCard] = useDeleteCardMutation();

  const editCard = () => {
    dispatch(setCard(card));
  };

  return (
    <Article>
      <p>{card.title}</p>
      {!isEditing && (
        <>
          <Details onClick={editCard}>
            <FaRegEye />
          </Details>
          <Delete onClick={() => deleteCard(card.id)}>
            <MdDeleteOutline />
          </Delete>
        </>
      )}
    </Article>
  );
};

export default CardView;
