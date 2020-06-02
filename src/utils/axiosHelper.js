import axios from 'axios';

const getRequest = (urlMask, data, config = {}) => {
  return axios({
    ...config,
    url: urlMask,
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    params: data,
  });
};

export { getRequest };
