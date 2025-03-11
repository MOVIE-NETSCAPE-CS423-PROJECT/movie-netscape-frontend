import { useSelector } from "react-redux";
import { MovieCard } from "../components/MovieCard";

function Favorites() {
  const { favorites } = useSelector((state) => state.favorites);

  function RenderFavorite() {
    return favorites?.map((movie) => (
      <MovieCard movie={movie} key={movie.id} />
    ));
  }

  return (
    <div className="row mt-4 authorization-page">
      {favorites.length !== 0 ? (
        <RenderFavorite />
      ) : (
        <div className="empty">
          <h1 className="display-1">No Favorites</h1>
          <p className="lead">
            Nothing to display here, add movies to your favorites and they will
            appear here.
          </p>
        </div>
      )}
    </div>
  );
}
export default Favorites;
