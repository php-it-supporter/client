import axios from 'axios';

export const END_POINT = 'http://127.0.0.1:8000/api';

export const getAllUserApprove = () => axios.get(`${END_POINT}/users`);

export const removeUser = (param: any) => axios.delete(`${END_POINT}/users/${param}`);

export const getAllUserPending = () => axios.get(`${END_POINT}/users/waiting`);

export const addUser = (param: any) =>
  axios.post(`${END_POINT}/users`, param, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const editUser = (param: any, id: any) => axios.put(`${END_POINT}/users/${id}`, param);

export const getAllMajor = () => axios.get(`${END_POINT}/majors`);

export const addMajor = (param: any) => axios.post(`${END_POINT}/majors`, param);

export const deleteMajor = (param: any) => axios.delete(`${END_POINT}/majors/${param}`);

export const editMajor = (param: any, id: any) => axios.put(`${END_POINT}/majors/${id}`, param);

export const findOneUser = (id: number) => axios.post(`${END_POINT}/users/${id}`);
export const loginApi = (body: any) => axios.post(`${END_POINT}/auth/login`, body);
export const register = (body: any) => axios.post(`${END_POINT}/auth/register`, body);

export const categoryApis = {
  findAll: (params = {}) => axios.get(`${END_POINT}/categories`, { params }),
  create: (body: any) => axios.post(`${END_POINT}/categories`, body),
  update: (body: any, id: number) => axios.put(`${END_POINT}/categories/${id}`, body),
  remove: (id: number) => axios.delete(`${END_POINT}/categories/${id}`),
};

export const postApis = {
  findAll: (params = {}) => axios.get(`${END_POINT}/posts`, { params }),
  findOne: (id: number) => axios.get(`${END_POINT}/posts/${id}`),
  create: (body: any) =>
    axios.post(`${END_POINT}/posts`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
  update: (body: any, id: number) =>
    axios.post(`${END_POINT}/posts/${id}`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
  remove: (id: number) => axios.delete(`${END_POINT}/posts/${id}`),
};
