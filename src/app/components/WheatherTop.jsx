import React from 'react';
import PropTypes from 'prop-types';

import { toHgmm } from '../utils/converter';
import { toDatestring, toTimeSting } from '../utils/dateConverter';
import { wheatherIcon } from '../utils/whetherTimeUtil';

const WheatherTop = (props) => {
  const { weather, dt_txt, main, wind } = props.wheather;
  return (
    <div className="wheather-contatiner">
      <div className="datetime">
        {toDatestring(dt_txt)} {toTimeSting(dt_txt)}
      </div>
      <div className="wheather-props">
        <div className="main-wheather-prop">
          <div className="cloudness">
            <div className="cloudness-icon">
              <i className={wheatherIcon(weather[0].id, dt_txt)} />
            </div>
            <div className="cloudness-text">{weather[0].description}</div>
          </div>
          <div className="temprature">
            {main.temp.toFixed()}
            <span className="temprature-unit">°C</span>
          </div>
        </div>
        <div className="extra-wheather-props">
          <div className="wheather-prop">
            <span className="wheather-prop-icon">
              <i className="icon-wind" />
            </span>
            {wind.speed}
            <span className="wheather-prop-unit"> m/s</span>
          </div>
          <div className="wheather-prop">
            <span className="wheather-prop-icon">
              <i className="fa fa-compass" aria-hidden="true" />
            </span>
            {toHgmm(main.pressure)}
            <span className="wheather-prop-unit"> mm. mercury</span>
          </div>
          <div className="wheather-prop">
            <span className="wheather-prop-icon">
              <i className="fa fa-tint" aria-hidden="true" />
            </span>
            {main.humidity}
            <span className="wheather-prop-unit"> %</span>
          </div>
        </div>
      </div>
    </div>
  );
};

WheatherTop.propTypes = {
  wheather: PropTypes.shape({
    dt: PropTypes.number,
    main: PropTypes.object,
    weather: PropTypes.array,
    clouds: PropTypes.object,
    wind: PropTypes.object,
    dt_txt: PropTypes.string,
  }).isRequired,
};

export default WheatherTop;
