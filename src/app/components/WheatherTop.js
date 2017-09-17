import React from 'react';
import PropTypes from 'prop-types';

import { toHgmm } from '../utils/converter';
import { toDatestring, toTimeSting } from '../utils/dateConverter';
import { wheatherIcon } from '../utils/whetherTimeUtil';

class WheatherTop extends React.Component {

  render() {
    const { wheather } = this.props;
    return (
      <div className="wheather-contatiner">
        <div className="datetime">
          { toDatestring(wheather.dt_txt) } { toTimeSting(wheather.dt_txt) }
        </div>
        <div className="wheather-props">
          <div className="main-wheather-prop">
            <div className="cloudness">
              <div className="cloudness-icon">{wheatherIcon(wheather.weather[0].id, wheather.dt_txt)}</div>
              <div className="cloudness-text">{wheather.weather[0].description}</div>
            </div>
            <div className="temprature">{wheather.main.temp.toFixed()}<span className="temprature-unit">°C</span></div>
          </div>
          <div className="extra-wheather-props">
            <div className="wheather-prop">
              <span className="wheather-prop-icon"><i className="icon-wind" /></span>
              {wheather.wind.speed}
              <span className="wheather-prop-unit"> m/s</span>
            </div>
            <div className="wheather-prop">
              <span className="wheather-prop-icon"><i className="fa fa-compass" aria-hidden="true" /></span>
              {toHgmm(wheather.main.pressure)}
              <span className="wheather-prop-unit"> mm. mercury</span>
            </div>
            <div className="wheather-prop">
              <span className="wheather-prop-icon"><i className="fa fa-tint" aria-hidden="true" /></span>
              {wheather.main.humidity}
              <span className="wheather-prop-unit"> %</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WheatherTop.propTypes = {
  wheather: PropTypes.shape({
    dt: PropTypes.number,
    main: PropTypes.object,
    wheather: PropTypes.array,
    clouds: PropTypes.object,
    wind: PropTypes.object,
    sys: PropTypes.object,
    dt_txt: PropTypes.string,
  }).isRequired,
};

export default WheatherTop;
