import { instance as axios } from '../axios';

const apiKey = '44e85d7c';

const API = {
  getMoviesByName: (name, page) =>
    `http://omdbapi.com/?apikey=${apiKey}&s=${name}&page=${page}`,
  getMovieById: id => `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
};

export const getMoviesByName = (name, page) =>
  axios.get(API.getMoviesByName(name, page));
export const getMovieById = id => axios.get(API.getMovieById(id));
