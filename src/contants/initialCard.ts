import { TO_DO } from "./status";

export const initialCard = {
  id: 0,
  title: "",
  description: "",
  deadline: new Date().toISOString().slice(0, 10),
  status: TO_DO,
};
