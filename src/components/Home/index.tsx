import { Wrapper } from "./styles";
import CardsWrapper from "../CardsWrapper";
import CardManagement from "../CardManagement";

const Home = () => {
  return (
    <Wrapper>
      <CardManagement />
      <CardsWrapper />
    </Wrapper>
  );
};

export default Home;
