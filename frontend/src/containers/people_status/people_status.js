import React, { Component } from 'react';
import PeoplestatusStyled from './people_status.styled';
import { UserlistStyled } from '../people_list/people_list.styled';
import UserInfo from '../people_list/user_info';
const randomMan = {
  profileImg:
    'https://randomuser.me/api/portraits/women/51.jpg',
  name: 'Wind',
  country: 'Ukraine'
};
class Peoplestatus extends Component {
  render() {
    return (
      <UserlistStyled>
        <PeoplestatusStyled>
          <div className="new-users">
            <h3>Latest status update</h3>
          </div>
          <UserInfo userInfo={randomMan} />
          {this.props.children}
        </PeoplestatusStyled>
      </UserlistStyled>
    );
  }
}

export default Peoplestatus;
