import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignupForm from '../components/SignupForm';

import { SubmissionError } from 'redux-form';
import _ from 'lodash';
import { requestSignup } from '../actions/signupActions'

class Signup extends React.Component {
  submit = ({ username, email, password }) => {
    this.props.requestSignup({ username, email, password });
  };

  render() {
    const { err } = this.props.signup;
    return (
      <div>
        <SignupForm onSubmit={this.submit} err={err} />
      </div>
    );
  }
}

const mapStateToProps = ({ signup }) => ({
  signup,
});
const mapDispatchToProps = dispatch => bindActionCreators({ requestSignup }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
