import React from 'react';
import Slider from 'react-slick';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toTimeSting, toDayAndDate } from '../utils/dateConverter';
import { wheatherIcon } from '../utils/whetherTimeUtil';

import { changeWheatherTime } from '../actions/wheatherTime';

class WheatherSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderSettings: {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
      },
    };
  }

  setWheatherTime = index => this.props.changeWheatherTime(index);

  wheather = (item, index) => (
    <div className="weather-item" key={item.dt} onClick={() => this.setWheatherTime(index)}>
      <time className="datetime">{ toDayAndDate(item.dt_txt) }</time>
      <time className="datetime">{ toTimeSting(item.dt_txt) }</time>
      <div className="cloudness-icon">{wheatherIcon(item.weather[0].id, item.dt_txt)}</div>
      <div className="temprature">{item.main.temp.toFixed()}<span className="temprature-unit">°C</span></div>
      <div className="cloudness-text">{item.weather[0].description}</div>
    </div>
  )

  render() {
    return (
      <div className="wheather-contatiner slider">
        <Slider {...this.state.sliderSettings}>
          {this.props.list.map(this.wheather)}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

WheatherSlider.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeWheatherTime: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeWheatherTime }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WheatherSlider);
