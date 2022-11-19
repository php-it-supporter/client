import axios from 'axios';

export const getAllUserApprove = () => axios.get('http://127.0.0.1:8000/api/users');

export const removeUser = (param: any) => axios.delete(`http://127.0.0.1:8000/api/users/${param}`);

export const getAllUserPending = () => axios.get('http://127.0.0.1:8000/api/users/waiting');

export const addUser = (param: any) => axios.post('http://127.0.0.1:8000/api/users', param);

export const editUser = (param: any, id: any) =>
  axios.put(`http://127.0.0.1:8000/api/users/${id}`, param);

export const getAllMajor = () => axios.get('http://127.0.0.1:8000/api/majors');

export const addMajor = (param: any) => axios.post('http://127.0.0.1:8000/api/majors', param);

export const deleteMajor = (param: any) =>
  axios.delete(`http://127.0.0.1:8000/api/majors/${param}`);

export const editMajor = (param: any, id: any) =>
  axios.put(`http://127.0.0.1:8000/api/majors/${id}`, param);
