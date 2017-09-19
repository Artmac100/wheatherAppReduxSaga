import React from 'react';
import PropTypes from 'prop-types';

const CityTitle = ({ location, country, changeCity }) => (
  <div className="city-name">
    {location}, {country}
    <button className="change-btn" onClick={changeCity} >CHANGE</button>
  </div>
);

CityTitle.propTypes = {
  location: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default CityTitle;
