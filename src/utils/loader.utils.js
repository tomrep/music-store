import { instance as axios } from '../axios';

const apiKey = '44e85d7c';

const API = {
  getMoviesByName: name => `http://omdbapi.com/?apikey=${apiKey}&s=${name}`,
  getMovieById: id => `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
};

export const getMoviesByName = name => axios.get(API.getMoviesByName(name));
export const getMovieById = id => axios.get(API.getMovieById(id));
