import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import { movies } from "../assets/movies";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addFavRemoveFav } from "../redux/favSlice";
export function SingleMovie() {
  const [isVideo, setIsVideo] = useState(false);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  const favoriteButton = (movie) => {
    dispatch(addFavRemoveFav({ movie }));
  };
  const getMovie = (myId) => {
    const result = movies.filter((m) => m.id == myId)[0];
    setMovie(result);
  };
  useEffect(() => {
    getMovie(id);
  }, []);

  return (
    <div className="d-flex py-5 flex-column justify-content-center">
      {isVideo && (
        <div className="row">
          <div className="col-lg-12">
            <ReactPlayer
              url={movie?.videoUrl}
              width="100%"
              height={"60vh"}
              volume={0.5}
              autoPlay
              playing={true}
              controls
            />
            <button
              type="button"
              className="btn btn-info mt-2"
              onClick={() => setIsVideo(!isVideo)}
            >
              Close Trailer
            </button>
          </div>
        </div>
      )}

      {!isVideo && (
        <div className="row">
          <div className="col-lg-4 single-movie">
            <img
              src={movie?.img}
              alt=""
              className="rounded"
              width="50%"
              // height={"100%"}
            />
          </div>
          <div className="col-lg-8 justify-content-between align-content-center">
            <div className="row">
              <div className="col-lg-12">
                <div className="">
                  <h3 className="h1">{movie?.title}</h3>
                  <span>Horror</span>
                </div>

                <p className="lead">{movie?.desc}</p>
              </div>
              <div className="col-lg-12 d-flex gap-2 ">
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => setIsVideo(true)}
                >
                  Watch Trailer
                </button>
                <button type="button" className="btn btn-info">
                  Buy - $40
                </button>
                <button type="button" className="btn btn-info">
                  Add to Watchlist
                </button>

                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => favoriteButton(movie)}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
