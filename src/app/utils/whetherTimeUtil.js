import React from 'react';

export const wheatherIcon = (stateWheather, intTime) => {
    const d = new Date(intTime);
    switch (true) {
      case stateWheather >= 200 && stateWheather < 300:
        return <i className="icon-clouds-flash-inv" />;
      case stateWheather >= 300 && stateWheather < 600:
        return <i className="icon-rain-inv" />;
      case stateWheather >= 600 && stateWheather < 700:
        return <i className="fa fa-snowflake-o" />;
      case stateWheather >= 700 && stateWheather < 800:
        return <i className="icon-mist" />;
      case stateWheather === 800:
        return d.getHours() < 19 && d.getHours() > 4 ? <i className="icon-sun-inv" /> : <i className="icon-moon-inv" />;
      case stateWheather === 801:
        return d.getHours() < 19 && d.getHours() > 4 ? <i className="icon-cloud-sun-inv" /> : <i className="icon-cloud-moon-inv" />;
      case stateWheather > 801 && stateWheather < 900:
        return <i className="icon-cloud-inv" />;
      default:
        return <div>N/A</div>;
    }
};