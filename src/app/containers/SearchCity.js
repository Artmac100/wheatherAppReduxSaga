import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestWeather } from "../actions/getWheather";
import { cityState } from "../actions/cityState";

class SearchCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputState: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitLocation = this.submitLocation.bind(this);
  }

  submitLocation(e) {
    e.preventDefault();
    this.props.requestWeather(this.state.inputState)
    if(Object.keys(this.props.wheather.data)) {
      this.props.cityState();
    }
  }

  componentWillUnmount() {
    if(this.state.inputState) localStorage.setItem('city', this.state.inputState);
  }

  handleInputChange(e) {
    this.setState({ inputState: e.target.value });
  }

  render() {
    return (
      <div className="form-state">
        <h4>Show me the weather in city or place:</h4>
        <form onSubmit={ this.submitLocation }>
          <input type="text" onChange={ this.handleInputChange } />
          <button>FIND</button>
        </form>
        <p>{this.props.wheather.err}</p>
      </div>
    );
  }
}


const mapStateToProps = state => ({ wheather: state.wheather });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestWeather, cityState }, dispatch);


export default connect( mapStateToProps, mapDispatchToProps )(SearchCity);