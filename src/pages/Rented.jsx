import { movies } from "../assets/movies";
import { MovieCard } from "../components/MovieCard";

function Rented() {
  return (
    <div className="row mt-4 authorization-page">
      <div className="empty">
        <h1 className="display-1">No Movies Yet</h1>
        <p className="lead">
          Nothing to display here, subscribe and add some movies to your
          watchlist.
        </p>
      </div>
    </div>
  );
}

export default Rented;
