import React from 'react';
import PropTypes from 'prop-types';
import { Input, Message } from 'semantic-ui-react';

const InputLogin = ({ input, meta: { touched, error }, placeholder = '', ...custom }) => {
  const hasError = touched && error !== undefined;
  return (
    <div>
      {hasError &&
        <Message
          error
          header="Error"
          content={error}
        />
      }
      <Input
        error={hasError}
        fluid
        placeholder={placeholder}
        {...input}
        {...custom}
      />
    </div>
  );
};

InputLogin.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputLogin;
