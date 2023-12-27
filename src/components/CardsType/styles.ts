import styled from "styled-components";
import { IN_PROGRESS, TO_DO, DONE } from "../../contants/status";
import { Status } from "../../../types";

const labelColor = {
  [TO_DO]: "#F0F8FF",
  [IN_PROGRESS]: "#FAEBD7",
  [DONE]: "#7FFFD4",
};

export interface IStatusProps {
  $status: Status;
}

export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const StatusWrapper = styled.div<IStatusProps>`
  width: 80%;
  border-radius: 5px;
  background-color: ${({ $status }) =>
    labelColor[$status as keyof typeof labelColor]};
  margin: 10px;
`;

export const Label = styled.h1`
  text-align: center;
`;
