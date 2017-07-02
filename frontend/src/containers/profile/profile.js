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
        <ButtonLogout onClick={this.logoutClick.bind(this)}>logout</ButtonLogout>
      </Homewrapper>
    );
  }
}

const mapStateToProps = ({ locals: { auth } }, ownProps) => {
  return {
    authenticated: auth.authenticated,
    userInfo: auth.userInfo
  };
};

export default connect(mapStateToProps, actions)(Profile);
