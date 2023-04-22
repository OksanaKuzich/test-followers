import axios from 'axios';

axios.defaults.baseURL = `https://639209d3ac688bbe4c5a65dd.mockapi.io/`;

export const getPopularTweets = async (page: number): Promise<any> => {
  const params = {
    page,
    limit: 8,
  }
  
  try {
    const responce = await axios('/users', { params });
    return responce.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getAllTweets = async (): Promise<any> => {
  try {
    const responce = await axios('/users');
    return responce.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
