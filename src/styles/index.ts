import styled from "styled-components";
import { ACTION, CANCEL } from "../contants/buttonTypes";

interface IButtonProps {
  $type?: string;
}

export const Button = styled.button<IButtonProps>`
  appearance: none;
  ${({ $type }) =>
    $type === ACTION &&
    `
      background-color: #2ea44f;
      &:hover {
        background-color: #2c974b;
      }
  `}
  ${({ $type }) =>
    $type === CANCEL &&
    `
      background-color: #8B0000;
      &:hover {
        background-color: #800000;
      }
  `}
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  color: #fff;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
`;
