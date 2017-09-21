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
        slidesToScroll: 2,
        slidesToShow: 8,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  }

  setWheatherTime = index => this.props.changeWheatherTime(index);

  wheather = (item, index) => (
    <div className="weather-item" key={item.dt} onClick={() => this.setWheatherTime(index)}>
      <time className="datetime">{ toDayAndDate(item.dt_txt) }</time>
      <time className="datetime">{ toTimeSting(item.dt_txt) }</time>
      <div className="cloudness-icon"><i className={wheatherIcon(item.weather[0].id, item.dt_txt)} /></div>
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
