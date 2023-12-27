import formatDate from "../utils/date/formatDate";
import { TO_DO } from "./status";

export const initialCard = {
  id: 0,
  title: "",
  description: "",
  deadline: formatDate(new Date().toLocaleDateString()),
  status: TO_DO,
};
