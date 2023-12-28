import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import CardsType from ".";
import configureStore from "redux-mock-store";
import cardsMock, { doneCards } from "../../utils/test/cardsMock";
import CardView from "../CardView";
import CardLoading from "../CardLoading";
import { DONE } from "../../contants/status";

jest.mock("../../features/cards/cards-api-slice");
jest.mock("../CardLoading", () =>
  jest.fn(() => <div data-testid="CardLoading" />)
);
jest.mock("../CardView", () => jest.fn(() => <div data-testid="CardView" />));

const mockStore = configureStore([]);
const store = mockStore({
  cards: cardsMock,
  card: { value: null, isEditing: false },
});

describe("CardsType", () => {
  test("CardsType component should render loading when fetching", async () => {
    require("../../features/cards/cards-api-slice").useFetchCardsQuery.mockReturnValue(
      {
        isFetching: true,
      }
    );

    render(
      <Provider store={store}>
        <CardsType label={DONE} cards={doneCards} />
      </Provider>
    );
    expect(CardLoading).toHaveBeenCalledTimes(1);
  });

  test("CardsType component should render Card Views when not fetching", async () => {
    require("../../features/cards/cards-api-slice").useFetchCardsQuery.mockReturnValue(
      {
        isFetching: false,
      }
    );

    render(
      <Provider store={store}>
        <CardsType label={DONE} cards={doneCards} />
      </Provider>
    );
    expect(CardView).toHaveBeenCalledTimes(doneCards.length);
    const [call1Props, call2Props] = CardView.mock.calls;

    expect(call1Props[0].card).toEqual(doneCards[0]);
    expect(call2Props[0].card).toEqual(doneCards[1]);
  });
});
