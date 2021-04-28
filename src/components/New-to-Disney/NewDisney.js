import { Container, Content, Wrap } from "./NewDisney.styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectnewDisney } from "../../features/movie/moviesSlice";
const NewDisney = (props) => {
  const movies = useSelector(selectnewDisney);
  return (
    <Container>
      <h4>New to Disney</h4>
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

export default NewDisney;
