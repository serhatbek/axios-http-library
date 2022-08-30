import axios from 'axios';
import { useEffect } from 'react';

const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};

export default FirstRequest;
