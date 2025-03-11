import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addFavRemoveFav } from "../redux/favSlice";

export function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const favoriteButton = (movie) => {
    dispatch(addFavRemoveFav({ movie }));
  };
  return (
    <div className="col-sm-3 mb-4 " key={movie?.title}>
      <div className="card movie-card">
        <img src={movie?.img} className="card-img-top" alt={movie?.title} />
        <div className="card-body d-flex justify-content-between align-content-center">
          <h5 className="card-text">
            <Link to={`/movie/${movie?.id}`}>{movie?.title}</Link>
          </h5>
          <span>
            <button className="btn" onClick={() => favoriteButton(movie)}>
              <FaHeart color="red" />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
