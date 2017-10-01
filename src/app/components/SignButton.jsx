import React from 'react';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router';

const SignButton = withRouter(({ handleClick, routeto, title, history }) =>
  (<Button onClick={() => handleClick(routeto, history)}>{ title }</Button>));

export default SignButton;
