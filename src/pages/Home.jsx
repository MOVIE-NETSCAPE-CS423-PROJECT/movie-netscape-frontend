import { useSelector } from "react-redux";
import { MovieCard } from "../components/MovieCard";

function Home() {
  const { movieList } = useSelector((state) => state.movies);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="mt-4">
      {user ? (
        <div className="d-flex align-items-center text-center search-card mt-3 ">
          <div className="col-lg-6 mx-auto">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search Movie"
                disabled
              />
              <span className="input-group-text" id="basic-addon2">
                Search
              </span>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="row">
        {movieList.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
