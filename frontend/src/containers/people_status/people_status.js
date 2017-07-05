// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import PeoplestatusStyled, {
  PeopleStatusListStyled
} from './people_status.styled';
import { UserlistStyled } from '../people_list/people_list.styled';
import UserInfo from '../people_list/user_info';
import UserStatus from './user_status';

const randomMan = {
  profileImg:
    'https://randomuser.me/api/portraits/women/51.jpg',
  name: 'Wind',
  country: 'Ukraine',
  statusMessage: 'Hello from the Midgard Earth'
};

class Peoplestatus extends Component {
  render() {
    return (
      <PeopleStatusListStyled>
        <div className="new-users">
          <h3>Latest status update</h3>
        </div>
        <PeoplestatusStyled>
          {this.props.messages &&
            this.props.messages.map((x, i) => {
              console.log(x);
              return (
                <UserStatus
                  name={x.name}
                  statusMessage={x.statusMessage}>
                  {x.name}: {x.statusMessage}
                </UserStatus>
              );
            })}
        </PeoplestatusStyled>
      </PeopleStatusListStyled>
    );
  }
}

const mapStateToProps = (
  { db: { usersStatus } },
  ownProps
) => {
  return {
    messages: usersStatus.messages
  };
};

export default connect(mapStateToProps)(Peoplestatus);
