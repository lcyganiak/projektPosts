import axios from 'axios';
const API = 'https://jsonplaceholder.typicode.com/posts'

const getOnePost = (id) => {
    return axios.get(`${API}/${id}`)
}

export {
    getOnePost
}