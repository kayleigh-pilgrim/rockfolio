import axios from 'axios';

const baseURL = '/api/stones';

export const getAll = () => {
  return axios.get(baseURL).then((response) => response.data);
};

export const getOne = (id) => {
  return axios.get(`${baseURL}/${id}`).then((response) => response.data);
};

export const create = (stone) => {
  return axios.post(baseURL, stone).then((response) => response.data);
};

export const update = (id, stone) => {
  return axios.put(`${baseURL}/${id}`, stone).then((response) => response.data);
};

export const remove = (id) => {
  return axios.delete(`${baseURL}/${id}`).then((response) => response.data);
};

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
