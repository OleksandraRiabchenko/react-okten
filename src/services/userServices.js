import axios from 'axios';

const axiosInstanse = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/users'});

const getUsers = () => axiosInstanse('');
const getUserPosts = (id) => axiosInstanse('/' + id + '/posts');

export {getUsers, getUserPosts}