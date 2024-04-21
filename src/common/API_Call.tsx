import axios from 'axios';

interface APIRequestProps {
  method: 'POST' | 'GET' | 'DELETE' | 'PUT';
  url: string;
  data?: any;
  params?: string;
}

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const makeAPIRequest = ({method, url, data, params}: APIRequestProps) =>
  new Promise(async (resolve, reject) => {
    const apiHeader = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    const option = {
      method,
      url: BASE_URL + url,
      data,
      params,
      headers: apiHeader,
    };
    axios(option)
      .then((response: any) => {
        console.log('api', option, response);

        resolve(response);
        if (response?.data?.statusCode === 200) {
        } else if (response?.data?.statusCode === 401) {
        } else if (
          response?.data?.statusCode >= 501 ||
          response?.data?.statusCode <= 599
        ) {
        } else {
          reject(response);
        }
      })
      .catch(error => {
        reject(error?.response);
        if (error?.response?.data?.statusCode === 401) {
        }
        if (
          error?.response?.data?.statusCode >= 501 ||
          error?.response?.data?.statusCode <= 599
        ) {
        }
        console.log('error in call', error);
      });
  });
