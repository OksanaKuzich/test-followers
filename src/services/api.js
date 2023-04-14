import axios from 'axios';

axios.defaults.baseURL = `https://639209d3ac688bbe4c5a65dd.mockapi.io/`;
const params = {
    page: 1,
    limit: 8,
}

export const getPopularTweets = async () => {
  try {
    const responce = await axios('/users', {params});
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllTweets = async () => {
  try {
    const responce = await axios('/users');
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};
