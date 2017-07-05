// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserlistStyled, PeoplelistStyled } from './people_list.styled';
import UserInfo from './user_info';

const pseudoUsers: Array<Object> = [
  {
    profileImg: 'https://randomuser.me/api/portraits/women/51.jpg',
    name: 'Wind',
    country: 'Ukraine'
  },
  {
    profileImg: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Fire',
    country: 'Thailand'
  },
  {
    profileImg: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Water',
    country: 'China33333333333333333333333333123123'
  }
];

class Peoplelist extends Component {
  renderUsers() {
    const { newUsers } = this.props;
    return (
      newUsers &&
      newUsers.map(x => {
        return <UserInfo userInfo={x} />;
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

const mapStateToProps = ({ db: { newUsers: { users } } }) => {
  return {
    newUsers: users
  };
};

export default connect(mapStateToProps)(Peoplelist);
