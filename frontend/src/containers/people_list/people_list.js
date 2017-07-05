// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  UserlistStyled,
  PeoplelistStyled
} from './people_list.styled';
import UserInfo from './user_info';

class Peoplelist extends Component {
  renderUsers() {
    const { newUsers } = this.props;
    return (
      newUsers &&
      newUsers.map((x, i) => {
        return (
          <UserInfo userInfo={x} key={`user_info-${i}`} />
        );
      })
    );
  }
  render() {
    return (
      <UserlistStyled>
        <div className="new-users">
          <h3>Meet new people</h3>
        </div>
        <PeoplelistStyled>
          {this.renderUsers()}
        </PeoplelistStyled>
      </UserlistStyled>
    );
  }
}

const mapStateToProps = ({
  db: { newUsers: { users } }
}) => {
  return {
    newUsers: users
  };
};

export default connect(mapStateToProps)(Peoplelist);
