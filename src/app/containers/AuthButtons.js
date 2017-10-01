import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logingOut } from '../actions/authAction';
import SignButton from '../components/SignButton';


class AuthButtons extends React.Component {
  redirectClick = (routeto, history) => {
    history.push(routeto)
  }

  logOutClick = () => {
    this.props.logingOut();
    window.localStorage.removeItem('token');
  }

  render() {
    const { authenticated, username } = this.props.authState;
    return (
      authenticated ?
         (<div>
           Welcome, { username } 
           <SignButton routeto="/" handleClick={this.logOutClick} title="Log out" />
         </div>)
      :
      (<div>
        <SignButton routeto="/signup" handleClick={this.redirectClick} title="Sign up" />
        <SignButton routeto="/login" handleClick={this.redirectClick}  title="Login" />
      </div>)
    )
  }
}

const mapStateToProps = ({ authState }) => ({
  authState,
});

const mapDispatchTopProps = dispatch => bindActionCreators({ logingOut }, dispatch);

export default connect(mapStateToProps, mapDispatchTopProps)(AuthButtons);
