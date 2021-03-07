import { useEffect } from 'react';

const useFetch = (dispatch, url) => {
  useEffect(() => {
    const fn = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return dispatch({ type: 'SET_DATA', data });
  
      } catch (err) {
        console.error('err', err);
      }
    };
    fn();
  }, [url]);
};

export default useFetch;
