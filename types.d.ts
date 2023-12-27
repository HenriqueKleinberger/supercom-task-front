import { TO_DO, DONE, IN_PROGRESS } from "./src/contants/status";

export type Status = TO_DO | IN_PROGRESS | DONE;

export type Card = {
  id: number;
  title: string;
  description: string;
  deadline: string;
  createdAt?: Date;
  status: Status;
};
