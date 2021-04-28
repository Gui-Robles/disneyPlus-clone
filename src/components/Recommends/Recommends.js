import { Container, Content, Wrap } from "./Recommends.styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../../features/movie/moviesSlice";

const Recommends = (props) => {
  const movies = useSelector(selectRecommend);
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Recommends;
