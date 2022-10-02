import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com/posts'


const getAllPosts = () => {
   return axios.get(API)
}


const getOnePost = (id) => {
    return axios.get(`${API}/${id}`)
}

export {
    getAllPosts,
    getOnePost
}
