import { movies } from "../assets/movies";
import { MovieCard } from "../components/MovieCard";

function Favorites() {
  return (
    <div className="row mt-4">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
export default Favorites;
