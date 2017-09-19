import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestWeather } from '../actions/getWheather';
import { cityState } from '../actions/cityState';

class SearchCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputState: '',
    };
  }
  submitLocation = (e) => {
    e.preventDefault();
    if (this.state.inputState.length > 2) {
      const query = 'q=' + this.state.inputState;
      this.props.requestWeather(query);
      if (Object.keys(this.props.data)) {
        this.props.cityState();
      }
    }
  }


  handleInputChange = e => this.setState({ inputState: e.target.value });

  render() {
    const { err } = this.props;
    return (
      <div className="form-state">
        <h4>Show me the weather in city or place:</h4>
        <form onSubmit={this.submitLocation}>
          <input type="text" onChange={this.handleInputChange} />
          <button>FIND</button>
        </form>
        <p>{ err }</p>
      </div>
    );
  }
}


const mapStateToProps = ({ wheather }) => ({
  data: wheather.data,
  err: wheather.err,
});

const mapDispatchToProps = dispatch =>
bindActionCreators({ requestWeather, cityState }, dispatch);

SearchCity.propTypes = {
  data: PropTypes.shape({
    cod: PropTypes.string,
    message: PropTypes.number,
    cnt: PropTypes.number,
    list: PropTypes.array,
    city: PropTypes.object,
  }).isRequired,
  err: PropTypes.string.isRequired,
  cityState: PropTypes.func.isRequired,
  requestWeather: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);
