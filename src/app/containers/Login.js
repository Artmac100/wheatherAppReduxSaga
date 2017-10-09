import React from 'react';
import { Container, Field, reduxForm } from 'redux-form';
import { Button, Message } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestLogin } from '../actions/loginActions'
import InputLogin from '../components/InputLogin';

class Login extends React.Component {
  submit = ({ username, password}) => {
    this.props.requestLogin({ username, password});
  }
  render() {
    const { handleSubmit, signup, login } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit)} className="login-form">
        <div>
          {
            signup.fullfilled && !login.fullfilled &&
            <Message content={signup.data.message} info />
          }
          <Field
            name="username"
            component={InputLogin}
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <Field
            name="password"
            component={InputLogin}
            type="password"
            placeholder="Password"
          />
        </div>
        <Button fluid type="submit">Submit</Button>
      </form>
    );
  }
}

const validate = ({ username, password }) => {
  const errors = {};
  if (!username || username.trim() === '') {
    errors.username = 'Username is required';
  }
  if (!password || password.trim() === '') {
    errors.password = 'Password is required';
  }
  return errors;
};

const mapStateToProps = ({ signup, login }) => ({
  signup,
  login,
});

const mapDispatchTopProps = dispatch => bindActionCreators({ requestLogin }, dispatch);

export default reduxForm({
  form: 'loginForm',
  validate,
})(connect(mapStateToProps, mapDispatchTopProps)(Login));

