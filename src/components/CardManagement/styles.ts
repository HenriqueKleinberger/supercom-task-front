import { styled } from "styled-components";

export const Field = styled.div`
  min-width: 20rem;
`;

export const InitCardButton = styled.div`
  margin: 10px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const Label = styled.label`
  display: block;
  text-align: center;
  margin: 0.5rem;
  font-weight: 600;
`;

export const Select = styled.select`
  width: 100%;
  height: 2rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const InputField = styled.input`
  width: 100%;
  height: 2rem;
  padding: 12px 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

export const Form = styled.form`
  margin: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 12px 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
  margin: 2rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;
