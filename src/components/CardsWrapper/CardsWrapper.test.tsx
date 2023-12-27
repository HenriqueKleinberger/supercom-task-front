import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import CardsWrapper from "./";
import configureStore from "redux-mock-store";
import cardsMock, {
  doneCards,
  inProgressCards,
  toDoCards,
} from "../../utils/test/cardsMock";
import CardsType from "../CardsType";
import { DONE, IN_PROGRESS, TO_DO } from "../../contants/status";

jest.mock("../../features/cards/cards-api-slice");
jest.mock("../CardsType", () => jest.fn(() => <div data-testid="CardsType" />));

const mockStore = configureStore([]);
const store = mockStore({
  cards: cardsMock,
  card: { value: null, isEditing: false },
});

describe("CardsWrapper", () => {
  test("renders CardsWrapper component", async () => {
    require("../../features/cards/cards-api-slice").useFetchCardsQuery.mockReturnValue(
      {
        data: cardsMock,
      }
    );

    render(
      <Provider store={store}>
        <CardsWrapper />
      </Provider>
    );
    expect(CardsType).toHaveBeenCalledTimes(3);
    const [call1Props, call2Props, call3Props] = CardsType.mock.calls;

    expect(call1Props[0]).toEqual({ label: TO_DO, cards: toDoCards });

    expect(call2Props[0]).toEqual({
      label: IN_PROGRESS,
      cards: inProgressCards,
    });

    expect(call3Props[0]).toEqual({
      label: DONE,
      cards: doneCards,
    });
  });
});
