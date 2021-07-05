import axios from 'axios';

const axiosInstanse = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getUsers = () => axiosInstanse('/users');
const getUser = (id) => axiosInstanse('/users/' + id);
const getPosts = () => axiosInstanse('/posts');
const getPost = (id) => axiosInstanse('/posts/' + id);
const getComments = () => axiosInstanse('/comments');
const getComment = (id) => axiosInstanse('/comments/' + id);

export {getUsers, getUser, getPosts, getPost, getComments, getComment}
