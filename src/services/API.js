import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'})

const getUsers = () => axiosInstance('/users');
const getPosts = () => axiosInstance('/posts');
const getComments = () => axiosInstance('/comments');

export {getUsers, getPosts, getComments}

