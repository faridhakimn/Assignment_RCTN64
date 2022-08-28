import http from '../http-common';

const getByTitle = (title) => {
  let url = '/?apikey=459f45e2&s=' + title;
  console.log(url)
  return http.get(url);
};

const get = (imdbID) => {
  let url = '/?apikey=459f45e2&i=' + imdbID;
  return http.get(url);
};

const MovieService = {
  getByTitle,
  get,
};

export default MovieService;
