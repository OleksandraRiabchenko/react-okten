import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getUsers = () => axiosInstance('/users');
const getUserPosts = (id) => axiosInstance('/users/' + id + '/posts');
const getUser = (id) => axiosInstance('/users/' + id);

export { getUsers, getUserPosts, getUser }