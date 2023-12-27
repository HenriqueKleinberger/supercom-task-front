import { DONE, IN_PROGRESS, TO_DO } from "../../contants/status";

export const toDoCards = [
  {
    id: 3,
    title: "Title 3",
    description: "Description 3",
    deadline: "2024-01-01",
    createdAt: "2023-12-27T19:48:06.7420105",
    status: TO_DO,
  },
];

export const inProgressCards = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    deadline: "2024-02-02",
    createdAt: "2023-12-27T19:48:06.7420105",
    status: IN_PROGRESS,
  },
];

export const doneCards = [
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    deadline: "2023-12-28",
    createdAt: "2023-12-27T19:48:06.7420105",
    status: DONE,
  },
  {
    id: 4,
    title: "Title 4",
    description: "Description 4",
    deadline: "2024-01-15",
    createdAt: "2023-12-27T19:48:06.7420105",
    status: DONE,
  },
];

const cardsMock = [...toDoCards, ...inProgressCards, ...doneCards];

export default cardsMock;
