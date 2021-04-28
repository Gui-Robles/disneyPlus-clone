import ImgSlider from "../imgSlider/imgSlider";
import Viewers from "../Viewers/Viewers";
import { Container } from "./home.styles";

const Home = (props) => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
};

export default Home;
