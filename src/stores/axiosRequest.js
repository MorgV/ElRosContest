import axios from 'axios';

export const getData = async (url,params) => {
  try {
    const response = await axios.get(url,params);
    return response.data;
  } catch (error) {
    alert(error)
  }
};
export const setData = async (url,params) => {
  try {
    const response = await axios.post(url,params);
    return response.data;
  } catch (error) {
    alert(error)
  }
};

  export const deleteData = async (url) => {
    try {
       await axios.delete(url);
    } catch (error) {
      alert(error)
    }
  };