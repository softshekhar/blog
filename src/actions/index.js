import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const UPDATE_POST = 'update_post';
export const DELETE_POST = 'delete_post';

//const ROOT_URL = 'https://reduxblog.herokuapp.com/api/posts';
const ROOT_URL = 'https://blog-spring-boot-mvc.herokuapp.com/blogs';
//const ROOT_URL = 'https://localhost:8095/blogs';
const API_KEY = '?key=softshekhar1234';


export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function updatePost(id, values, callback) {
  const request = axios.update(`${ROOT_URL}/${id}${API_KEY}`, values)
    .then(() => callback());

  return {
    type: UPDATE_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}
