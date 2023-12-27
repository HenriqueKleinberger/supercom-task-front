import {
  InputField,
  Form,
  TextArea,
  Row,
  Field,
  Label,
  Select,
} from "./styles";
import { Button } from "../../styles";
import { useState } from "react";
import { Card } from "../../../types";
import { DONE, IN_PROGRESS, TO_DO } from "../../contants/status";

interface ICardFormProps {
  save: (card: Card) => void;
}

const initialCard = {
  id: 0,
  title: "",
  description: "",
  deadline: new Date().toISOString().slice(0, 10),
  status: TO_DO,
};

const CardForm = ({ save }: ICardFormProps) => {
  const [card, setCard] = useState<Card>(initialCard);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    save(card);
  };

  return (
    <Form onSubmit={submit}>
      <Row>
        <Field>
          <Label htmlFor="card-title">Title</Label>
          <InputField
            id="card-title"
            value={card.title}
            onChange={(e) =>
              setCard((state) => ({ ...state, title: e.target.value }))
            }
          />
        </Field>
        <Field>
          <Label htmlFor="card-deadline">Deadline</Label>
          <InputField
            placeholder="DeadLine"
            type="date"
            id="card-deadline"
            value={card.deadline}
            onChange={(e) =>
              setCard((state) => ({ ...state, deadline: e.target.value }))
            }
          />
        </Field>
        <Field>
          <Label htmlFor="card-status">Task status:</Label>
          <Select
            name="status"
            id="card-status"
            value={card.status}
            onChange={(e) =>
              setCard((state) => ({ ...state, status: e.target.value }))
            }
          >
            <option value={TO_DO}>{TO_DO}</option>
            <option value={IN_PROGRESS}>{IN_PROGRESS}</option>
            <option value={DONE}>{DONE}</option>
          </Select>
        </Field>
      </Row>
      <Field>
        <TextArea
          value={card.description}
          placeholder="Description"
          id="card-description"
          onChange={(e) =>
            setCard((state) => ({ ...state, description: e.target.value }))
          }
        />
      </Field>
      <Button type="submit">Save task</Button>
    </Form>
  );
};

export default CardForm;
