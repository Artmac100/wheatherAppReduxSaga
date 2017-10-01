import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Button, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import InputLogin from '../components/InputLogin';


const SignupForm = ({ handleSubmit, err }) => {
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div>
        <Field
          name="username"
          component={InputLogin}
          type="text"
          placeholder="Username"
        />
      </div>
      <div>
        <Field
          name="email"
          component={InputLogin}
          type="text"
          placeholder="Email"
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
      <div>
        <Field
          name="confirmpassword"
          component={InputLogin}
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <Button fluid primary type="submit">Submit</Button>
    </form>
  );
};

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const validate = ({ username, email, password, confirmpassword }) => {
  const errors = {};
  if (!username || username.trim() === '') {
    errors.username = 'Username is required';
  }
  if (!email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }
  if (!password) {
    errors.password = 'Password is required';
  }
  if (password !== confirmpassword) {
    errors.confirmpassword = 'Passwords does not match';
  }
  return errors;
};

export default reduxForm({
  form: 'submitForm',
  validate,
})(SignupForm);

