// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { UserlistStyled, PeoplelistStyled } from './people_list.styled';
import UserInfo from './user_info';

class Peoplelist extends Component {
  renderUsers() {
    const { newUsers } = this.props;
    return newUsers && newUsers.map((user, i) => <UserInfo userInfo={user} key={`user_info-${i}`} />);
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

Peoplelist.propTypes = {
  newUsers: PropTypes.array
};

const mapStateToProps = ({ db: { newUsers: { users } } }) => ({
  newUsers: users
});

export default connect(mapStateToProps)(Peoplelist);
