//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ButtonLogout } from './profile.styled';
import { Homewrapper } from '../../theme/components.styled';
import * as actions from '../../actions';

class Profile extends Component {
  logoutClick() {
    if (this.props.authenticated) {
      this.props.signoutUser();
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <Homewrapper>
        <ButtonLogout onClick={this.logoutClick.bind(this)}>
          logout
        </ButtonLogout>
      </Homewrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.user.authenticated,
    userInfo: state.user.userInfo
  };
};

export default connect(mapStateToProps, actions)(Profile);
