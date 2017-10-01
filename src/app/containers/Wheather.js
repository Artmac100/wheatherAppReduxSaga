import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestWeather } from '../actions/getWheather';

import WheatherTop from '../components/WheatherTop';
import SearchCity from './SearchCity';
import LoadSpiner from '../components/LoadSpiner';
import WheatherSlider from './WheatherSlider';
import CityTitle from '../components/CityTitle';

import { formState } from '../actions/cityState';


class Wheather extends React.Component {
  componentDidMount() {
    this.props.requestWeather();
  }

  changeCity = () => this.props.formState();

  static propTypes = () => ({
    data: PropTypes.shape({
      cod: PropTypes.string,
      message: PropTypes.number,
      cnt: PropTypes.number,
      list: PropTypes.array,
      city: PropTypes.object,
    }).isRequired,
    wheatherTime: PropTypes.shape({ index: PropTypes.number.isRequired }).isRequired,
    pending: PropTypes.bool.isRequired,
    cityState: PropTypes.bool.isRequired,
    formState: PropTypes.func.isRequired,
    requestWeather: PropTypes.func.isRequired,
  })

  render() {
    const { data, pending, cityState, wheatherTime } = this.props;
    if (pending) return <LoadSpiner />;
    return (
      Object.keys(data).length && !cityState ?
        <div>
          <CityTitle
            location={data.city.name}
            country={data.city.country}
            changeCity={this.changeCity}
          />
          <WheatherTop wheather={data.list[wheatherTime.index]} />
          <WheatherSlider list={data.list} />
        </div>
      :
        <SearchCity />
    );
  }

}

const mapStateToProps = ({ wheather, cityState, wheatherTime }) => ({
  data: wheather.data,
  pending: wheather.pending,
  cityState,
  wheatherTime,
});



const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestWeather, formState }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wheather);
