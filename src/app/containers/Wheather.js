import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import { requestWeather } from '../actions/getWheather';

import WheatherTop from '../components/WheatherTop';
import SearchCity from './SearchCity';
import LoadSpiner from '../components/LoadSpiner';

import { formState } from '../actions/cityState';

import { toTimeSting, toDayAndDate } from '../utils/dateConverter';
import { wheatherIcon } from '../utils/whetherTimeUtil';

class Wheather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wheatherTime: 0,
      sliderSettings: {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
      },
    };
  }

  componentDidMount() {
    if (localStorage.getItem('city')) {
      this.props.requestWeather(localStorage.getItem('city'));
    }
  }

  setWheatherTime = (index) => {
    this.setState({ wheatherTime: index });
  }


  wheather = (item, index) => (
    <div className="weather-item" key={item.dt} onClick={this.setWheatherTime.bind(this, index)}>
      <time className="datetime">{ toDayAndDate(item.dt_txt) }</time>
      <time className="datetime">{ toTimeSting(item.dt_txt) }</time>
      <div className="cloudness-icon">{wheatherIcon(item.weather[0].id, item.dt_txt)}</div>
      <div className="temprature">{item.main.temp.toFixed()}<span className="temprature-unit">°C</span></div>
      <div className="cloudness-text">{item.weather[0].description}</div>
    </div>
  )

  changeCity = () => {
    this.props.formState();
  }

  render() {
    const { wheather, cityState } = this.props;
    if (wheather.pending) return <LoadSpiner />;
    return (
      Object.keys(wheather.data).length && !cityState ?
        <div>
          <div className="city-name">
            {wheather.data.city.name}, {wheather.data.city.country}
            <button className="change-btn" onClick={this.changeCity} >CHANGE</button>
          </div>
          <WheatherTop 
            wheather={wheather.data} 
            toTimeSting={this.toTimeSting} 
            num={this.state.wheatherTime}/>
          <div className="wheather-contatiner slider">
            <Slider {...this.state.sliderSettings}>
              {wheather.data.list.map(this.wheather)}
            </Slider>
          </div>
        </div>
      :
        <SearchCity />
    );
  }

}

const mapStateToProps = ({ wheather, cityState }) => ({ wheather, cityState });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestWeather, formState }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wheather);
