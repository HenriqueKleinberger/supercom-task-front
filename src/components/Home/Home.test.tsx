import renderer from "react-test-renderer";
import Home from "./";

jest.mock("../CardsWrapper", () => () => "CardsWrapper");
jest.mock("../CardManagement", () => () => "CardManagement");

it("changes the class when hovered", () => {
  const component = renderer.create(<Home />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
