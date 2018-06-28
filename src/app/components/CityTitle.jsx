import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const CityTitle = ({ location, country, changeCity }) => (
  <div className="city-name">
    <div>
      {location}, {country}
    </div>
    <Button onClick={changeCity}>CHANGE</Button>
  </div>
);

CityTitle.propTypes = {
  location: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default CityTitle;
