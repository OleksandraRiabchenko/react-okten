import axios from 'axios';

const axiosInstanse = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/users'});

const getUsers = () => axiosInstanse('');
const getUser = (id) => axiosInstanse('/' + id);
// const getPosts = (id) => axiosInstanse('/' + id + '/posts');


export {getUsers, getUser}