import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { Card } from "../../../types";
import { Article, Edit, Delete } from "./style";
interface CardProps {
  card: Card;
}

const CardView = ({ card }: CardProps) => {
  return (
    <Article>
      <p>{card.title}</p>
      <Edit>
        <MdOutlineEdit />
      </Edit>
      <Delete>
        <MdDeleteOutline />
      </Delete>
    </Article>
  );
};

export default CardView;
