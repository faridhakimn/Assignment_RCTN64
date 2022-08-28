import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByTitle } from '../../store/actions/movies';

export default function Movie() {
  const { getDataByTitle } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByTitle('Spider Man'));
  }, [dispatch]);

  return (
    <>
      <div>
        <div style={{ fontSize: 30 }} className="flex text-Blue px-10 mt-10 font-semibold">Show your Favorite Movies</div>
        <div className="flex flex-col flex-wrap items-center justify-center py-10 sm:flex-row">
          {getDataByTitle &&
            getDataByTitle.map((movie) => (
              <div
                className="flex flex-col items-center px-10"
                key={movie.imdbID}>
                <img
                    src={movie.Poster}
                    alt=""
                    className="z-10 mt-4 h-400px w-72"
                  />
                  <div className="z-10 flex items-center justify-center w-72 h-20 px-5 bg-Orange">
                    <h1 className="font-bold text-white">
                      {movie.Title}
                    </h1>
                  </div>
                <div className="z-10 flex flex-col justify-between w-64 mt-5">
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
