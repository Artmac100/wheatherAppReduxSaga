import React from 'react';
import { toHgmm } from '../utils/converter';
import { toDatestring, toTimeSting } from '../utils/dateConverter';
import { wheatherIcon } from '../utils/whetherTimeUtil';

class WheatherTop extends React.Component {

  render() {
    const wheatherItem = this.props.wheather.list[this.props.num];
    return (
      <div className="wheather-contatiner">
        <div className="datetime">
          { toDatestring(wheatherItem.dt_txt) } { toTimeSting(wheatherItem.dt_txt) }
        </div>
        <div className="wheather-props">
          <div className="main-wheather-prop">
            <div className="cloudness">
              <div className="cloudness-icon">{wheatherIcon(wheatherItem.weather[0].id, wheatherItem.dt_txt)}</div>
              <div className="cloudness-text">{wheatherItem.weather[0].description}</div>
            </div>
            <div className="temprature">{wheatherItem.main.temp.toFixed()}<span className="temprature-unit">°C</span></div>
          </div>
          <div className="extra-wheather-props">
            <div className="wheather-prop">
              <span className="wheather-prop-icon"><i className="icon-wind" /></span>
              {wheatherItem.wind.speed}
              <span className="wheather-prop-unit"> m/s</span>
            </div>
            <div className="wheather-prop">
              <span className="wheather-prop-icon"><i className="fa fa-compass" aria-hidden="true" /></span>
              {toHgmm(wheatherItem.main.pressure)}
              <span className="wheather-prop-unit"> mm. mercury</span>
            </div>
            <div className="wheather-prop">
              <span className="wheather-prop-icon"><i className="fa fa-tint" aria-hidden="true" /></span>
              {wheatherItem.main.humidity}
              <span className="wheather-prop-unit"> %</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default WheatherTop;
