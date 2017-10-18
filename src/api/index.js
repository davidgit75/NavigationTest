import axios from 'axios';

export const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
export const URL_IMAGES = 'http://lorempixel.com/400/200/people/';

export const getUsers = (ct, ce) => {
  return axios.get(URL_USERS)
    .then(data => ct(data.data))
    .catch(error => ce(error))
};
