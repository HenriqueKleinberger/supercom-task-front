import { FaRegEye } from "react-icons/fa";
import ReactModal from "react-modal";
import { MdDeleteOutline } from "react-icons/md";
import { Card } from "../../../types";
import { Article, Details, Delete } from "./style";
import { useDeleteCardMutation } from "../../features/cards/cards-api-slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCard } from "../../features/cards/card-slice";
import { useState } from "react";
import { Button } from "../../styles";
import Modal from "../Modal";

interface CardProps {
  card: Card;
}

const CardView = ({ card }: CardProps) => {
  const dispatch = useAppDispatch();
  const isEditing = useAppSelector((state) => state.card.isEditing);
  const [deleteCardMutation] = useDeleteCardMutation();
  const [isModalOpened, setOpenModal] = useState(false);

  const editCard = () => {
    dispatch(setCard(card));
  };

  const deleteCard = () => {
    deleteCardMutation(card.id);
    setOpenModal(false);
  };

  return (
    <>
      <Article>
        <p>{card.title}</p>
        {!isEditing && (
          <>
            <Details onClick={editCard}>
              <FaRegEye />
            </Details>
            <Delete onClick={() => setOpenModal(true)}>
              <MdDeleteOutline />
            </Delete>
          </>
        )}
      </Article>
      <Modal
        isOpen={isModalOpened}
        message={`Are you sure you want to delete card: ${card.title}`}
        cancelAction={() => setOpenModal(false)}
        onAction={deleteCard}
      />
    </>
  );
};

export default CardView;
