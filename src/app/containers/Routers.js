import React from 'react';
import {
  Router,
  Route,
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import history from '../history';
import Home from '../components/Home';
import Wheather from './Wheather';
import Login from './Login';
import Signup from './Signup';
import AuthButtons from './AuthButtons';
import PrivateRoute from './PrivateRoute';

import { requestUserdata } from '../actions/userDataActions';

class RoutersClass extends React.Component {
  componentDidMount() {
    this.props.requestUserdata();
  }

  static propTypes = () => ({
    authState: PropTypes.shape({
      authenticated: PropTypes.bool,
    }).isRequred,
  })

  render() {
    return (
      <Router history={history}>
        <div>
          <div className="nav-bar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/wheather">Wheather</Link></li>
            </ul>
            <AuthButtons />
          </div>
          <hr />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/wheather" component={Wheather} auth={this.props.authState.authenticated} />
          </div>
        </div>
      </Router>
    );
  }
}


const mapStateToProps = ({ authState }) => ({
  authState,
});

const mapDispatchToProps = dispatch => bindActionCreators({ requestUserdata }, dispatch);

const Routers = connect(mapStateToProps, mapDispatchToProps)(RoutersClass);
export default Routers;
