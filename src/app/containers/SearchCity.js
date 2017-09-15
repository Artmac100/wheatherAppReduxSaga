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
  }

  submitLocation = (e) => {
    e.preventDefault();
    this.props.requestWeather(this.state.inputState)
    if(Object.keys(this.props.wheather.data)) {
      this.props.cityState();
    }
  }

  componentWillUnmount() {
    if(this.state.inputState) localStorage.setItem('city', this.state.inputState);
  }

  handleInputChange = (e) => {
    this.setState({ inputState: e.target.value });
  }

  render() {
    const { wheather } = this.props;
    return (
      <div className="form-state">
        <h4>Show me the weather in city or place:</h4>
        <form onSubmit={ this.submitLocation }>
          <input type="text" onChange={ this.handleInputChange } />
          <button>FIND</button>
        </form>
        <p>{ wheather.err }</p>
      </div>
    );
  }
}


const mapStateToProps = ({ wheather }) => ({ wheather });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestWeather, cityState }, dispatch);


export default connect( mapStateToProps, mapDispatchToProps )(SearchCity);