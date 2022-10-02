import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com/posts'


const getAllPosts = () => {
   return axios.get(API)
}



export {
    getAllPosts,
}
