import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import { requestWeather } from './actions/getWheather';

import WheatherTop from './components/WheatherTop';
import SearchCity from './containers/SearchCity';
import LoadSpiner from './components/LoadSpiner';

import { formState } from './actions/cityState';


class App extends React.Component {
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

  toDayAndDate = (intTime) => {
    const d = new Date(intTime);
    const weekday = [
      'SUN',
      'MON',
      'TUE',
      'WED',
      'THU',
      'FRI',
      'SAT',
    ];
    return `${weekday[d.getDay()]} ${d.getDate()}`;
  }


  toTimeSting = (intTime) => {
    const d = new Date(intTime);
    let minutes = d.getMinutes();
    if ((minutes + '').length === 1) {
      minutes = '0' + d.getMinutes();
    }
    return `${d.getHours()}:${minutes}`;
  }

  wheatherIcon = (stateWheather, intTime) => {
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
  }

  wheather = (item, index) => (
      <div className="weather-item" key={item.dt} onClick={this.setWheatherTime.bind(this, index)}>
        <time className="datetime">{ this.toDayAndDate(item.dt_txt) }</time>
        <time className="datetime">{ this.toTimeSting(item.dt_txt) }</time>
        <div className="cloudness-icon">{this.wheatherIcon(item.weather[0].id, item.dt_txt)}</div>
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
            wheatherIcon={this.wheatherIcon} 
            num={this.state.wheatherTime}
            wheatherIcon={this.wheatherIcon}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
