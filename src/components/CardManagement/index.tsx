import { ChangeEvent } from "react";
import {
  InputField,
  Form,
  TextArea,
  Row,
  Field,
  Label,
  Select,
  Buttons,
  InitCardButton,
} from "./styles";
import { Button } from "../../styles";
import { Card } from "../../../types";
import { DONE, IN_PROGRESS, TO_DO } from "../../contants/status";
import { initialCard } from "../../contants/initialCard";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCard, updateCard } from "../../features/cards/card-slice";
import {
  usePostCardMutation,
  usePutCardMutation,
} from "../../features/cards/cards-api-slice";
import { ACTION, CANCEL } from "../../contants/buttonTypes";

const CardManagement = () => {
  const card = useAppSelector((state) => state.card.value);
  const dispatch = useAppDispatch();
  const [postCard] = usePostCardMutation();
  const [putCard] = usePutCardMutation();

  if (!card) {
    const initializeCard = () => {
      dispatch(setCard(initialCard));
    };

    return (
      <InitCardButton>
        <Button
          data-testid="button-init-form"
          $type={ACTION}
          onClick={initializeCard}
        >
          Create new card
        </Button>
      </InitCardButton>
    );
  }

  const cancelCard = () => {
    dispatch(setCard(null));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (card.id === 0) {
      postCard(card);
    } else if (card.id) {
      putCard(card);
    }

    dispatch(setCard(null));
  };

  const updateField = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const fieldName = e.target.name as Exclude<keyof Card, "id">;
    dispatch(updateCard({ fieldName, fieldValue: e.target.value }));
  };

  return (
    <Form onSubmit={submit} data-testid="card-form">
      <Row>
        <Field>
          <Label htmlFor="card-title">Title</Label>
          <InputField
            name="title"
            id="card-title"
            value={card.title}
            onChange={updateField}
            data-testid="card-title"
          />
        </Field>
        <Field>
          <Label htmlFor="card-deadline">Deadline</Label>
          <InputField
            placeholder="Deadline"
            name="deadline"
            type="date"
            id="card-deadline"
            value={card.deadline}
            onChange={updateField}
            data-testid="card-deadline"
          />
        </Field>
        <Field>
          <Label htmlFor="card-status">Task status:</Label>
          <Select
            name="status"
            id="card-status"
            value={card.status}
            onChange={updateField}
            data-testid="card-status"
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
          name="description"
          placeholder="Description"
          id="card-description"
          onChange={updateField}
          data-testid="card-description"
        />
      </Field>
      <Buttons>
        <Button $type={ACTION} type="submit">
          Save card
        </Button>
        <Button $type={CANCEL} onClick={cancelCard}>
          Cancel card
        </Button>
      </Buttons>
    </Form>
  );
};

export default CardManagement;
