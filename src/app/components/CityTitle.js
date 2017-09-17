import React from 'react';
import PropTypes from 'prop-types';

const CityTitle = ({ city, changeCity }) => (
  <div className="city-name">
    {city.name}, {city.country}
    <button className="change-btn" onClick={changeCity} >CHANGE</button>
  </div>
);

CityTitle.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    coord: PropTypes.object,
    country: PropTypes.string,
  }).isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default CityTitle;
