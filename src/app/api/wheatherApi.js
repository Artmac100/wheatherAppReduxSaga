import axios from 'axios';
import config from './config';


const fetchData = (location) => {
  const uri = `${config.baseUrl}forecast?${location}&units=metric&appid=${config.key}`;
  return axios.get(uri);
};

const fetchWheather = (location) => {
  if (!location) {
    if (localStorage.getItem('city')) {
      const storeLocation = `id=${localStorage.getItem('city')}`;
      return fetchData(storeLocation);
    }
    const getPosition = (options) => {
      return new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    };

    return getPosition()
      .then((pos) => {
        const position = `lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`;
        return position;
      })
      .then(position => fetchWheather(position));
  }
  return fetchData(location);
};

export default fetchWheather;
