import { useFetchCardsQuery } from "../../features/cards/cards-api-slice";
import { Card } from "../../../types";
import CardView from "../Card";
const CardsWrapper = () => {
  const { data = [], isFetching } = useFetchCardsQuery();
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
    <div>
      {Object.keys(types).map((status) => {
        return (
          <div>
            <h1>{status}</h1>
            {types[status].map((card) => (
              <CardView card={card} />
            ))}
          </div>
        );
      })}
      ;
    </div>
  );
};

export default CardsWrapper;
