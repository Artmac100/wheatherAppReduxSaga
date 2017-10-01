import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignupForm from '../components/SignupForm';
import { requestSignup, RESPOND_SIGNUP, REJECT_SIGNUP } from '../actions/signupActions';

import { SubmissionError } from 'redux-form';
import _ from 'lodash';

class Signup extends React.Component {
  submitPromise = (params) => (
    new Promise((resolve, reject) => {
      const { requestSignup, signup } = this.props;
      const { data, err } = signup;
      requestSignup(params);
      if ( RESPOND_SIGNUP) {
        resolve(data)
      }
      if(REJECT_SIGNUP){
        reject(err)
      }
    })
  )

  submit = ({ username, email, password }) => {
    this.props.requestSignup({ username, email, password })
  }

  render() {
    const { err } = this.props.signup;
    return (
      <div>
        <SignupForm onSubmit={this.submit} err={err} />
      </div>
    )
  }
}

const mapStateToProps = ({ signup }) => ({
  signup
});
const mapDispatchToProps = dispatch => bindActionCreators({ requestSignup }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Signup);