import { Card } from "../../../types";
import { Wrapper } from "./styles";
import { DONE, IN_PROGRESS, TO_DO } from "../../contants/status";
import CardsType from "../CardsType";
import { useFetchCardsQuery } from "../../features/cards/cards-api-slice";

const CardsWrapper = () => {
  const { data = [] } = useFetchCardsQuery();
  const types: Record<string, Card[]> = data.reduce(
    (acc: Record<string, Card[]>, curr) => {
      const status = curr.status;
      if (acc[status]) {
        acc[status].push(curr);
      } else {
        acc[status] = [curr];
      }
      return acc;
    },
    {}
  );

  return (
    <Wrapper>
      <CardsType label={TO_DO} cards={types[TO_DO]} />
      <CardsType label={IN_PROGRESS} cards={types[IN_PROGRESS]} />
      <CardsType label={DONE} cards={types[DONE]} />
    </Wrapper>
  );
};

export default CardsWrapper;
