import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import CardsManagement from "./";
import configureStore from "redux-mock-store";
import cardsMock from "../../utils/test/cardsMock";
import { updateCard } from "../../features/cards/card-slice";
import { initialCard } from "../../contants/initialCard";

jest.mock("../../app/hooks");
jest.mock("../../features/cards/card-slice", () => ({
  updateCard: jest.fn(),
  setCard: jest.fn(),
}));
jest.mock("../../features/cards/cards-api-slice");
jest.mock("../CardsType", () => jest.fn(() => <div data-testid="CardsType" />));

const mockStore = configureStore([]);
const store = mockStore({
  cards: cardsMock,
  card: { value: initialCard, isEditing: false },
});

describe("CardsManagement", () => {
  test("should render button init when card is null", async () => {
    require("../../features/cards/cards-api-slice").usePostCardMutation.mockReturnValue(
      [jest.fn()]
    );
    require("../../features/cards/cards-api-slice").usePutCardMutation.mockReturnValue(
      [jest.fn()]
    );
    require("../../app/hooks").useAppSelector.mockReturnValue(null);
    require("../../app/hooks").useAppDispatch.mockReturnValue(jest.fn());

    render(
      <Provider store={store}>
        <CardsManagement />
      </Provider>
    );
    const initButton = screen.getByTestId("button-init-form");
    expect(initButton).not.toBe(null);
  });

  test("change title when title input is changed", async () => {
    require("../../features/cards/cards-api-slice").usePostCardMutation.mockReturnValue(
      [jest.fn()]
    );
    require("../../features/cards/cards-api-slice").usePutCardMutation.mockReturnValue(
      [jest.fn()]
    );
    require("../../app/hooks").useAppSelector.mockReturnValue(initialCard);
    require("../../app/hooks").useAppDispatch.mockReturnValue(jest.fn());

    render(
      <Provider store={store}>
        <CardsManagement />
      </Provider>
    );
    const titleInput = screen.getByTestId("card-title");
    fireEvent.change(titleInput, { target: { value: "test" } });
    expect(updateCard).toHaveBeenCalledWith({
      fieldName: "title",
      fieldValue: "test",
    });
  });

  test("should postCard when submit form and id is 0", async () => {
    const postMock = jest.fn();
    require("../../features/cards/cards-api-slice").usePostCardMutation.mockReturnValue(
      [postMock]
    );
    require("../../features/cards/cards-api-slice").usePutCardMutation.mockReturnValue(
      [jest.fn()]
    );
    require("../../app/hooks").useAppSelector.mockReturnValue(initialCard);
    require("../../app/hooks").useAppDispatch.mockReturnValue(jest.fn());

    render(
      <Provider store={store}>
        <CardsManagement />
      </Provider>
    );

    const form = screen.getByTestId("card-form");

    fireEvent.submit(form);

    expect(postMock).toHaveBeenCalledTimes(1);
  });

  test("should putCard when submit form and id is not 0", async () => {
    const putMock = jest.fn();
    require("../../features/cards/cards-api-slice").usePostCardMutation.mockReturnValue(
      [jest.fn()]
    );
    require("../../features/cards/cards-api-slice").usePutCardMutation.mockReturnValue(
      [putMock]
    );
    require("../../app/hooks").useAppSelector.mockReturnValue({
      ...initialCard,
      id: 1,
    });
    require("../../app/hooks").useAppDispatch.mockReturnValue(jest.fn());

    render(
      <Provider store={store}>
        <CardsManagement />
      </Provider>
    );

    const form = screen.getByTestId("card-form");

    fireEvent.submit(form);

    expect(putMock).toHaveBeenCalledTimes(1);
  });
});
