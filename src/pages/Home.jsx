import { useSelector } from "react-redux";
import { MovieCard } from "../components/MovieCard";

function Home() {
  const { movieList } = useSelector((state) => state.movies);
  const { user } = useSelector((state) => state.auth);
  console.log(movieList);
  return (
    <div className="mt-4">
      {user ? (
        <div className="d-flex align-items-center text-center search-card mt-3 ">
          <div className="col-lg-6 mx-auto">
            <div className="input-group mb-3">
              <input
                type="text"
                name="search"
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
        {movieList == null ? (
          <div className="empty-home ">
            <div className="d-flex justify-content-center align-items-center flex-wrap">
              <h1 className="display-1">404</h1>
            </div>
          </div>
        ) : (
          movieList.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))
        )}
      </div>
    </div>
  );
}
export default Home;
