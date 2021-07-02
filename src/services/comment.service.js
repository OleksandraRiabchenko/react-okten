import axios from 'axios';

const axiosInstanse = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getPosts = () => axiosInstanse('/posts');
const getComments = (id) => axiosInstanse('/posts/' + id + '/comments');

export {getPosts, getComments}