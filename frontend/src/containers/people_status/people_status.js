// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import PeoplestatusStyled, { PeopleStatusListStyled } from './people_status.styled';
import { UserlistStyled } from '../people_list/people_list.styled';
import UserInfo from '../people_list/user_info';
import UserStatus from './user_status';

const randomMan = {
  profileImg: 'https://randomuser.me/api/portraits/women/51.jpg',
  name: 'Wind',
  country: 'Ukraine',
  statusMessage: 'Hello from the Midgard Earth'
};

const renderUserStatus = props =>
  props.messages &&
  props.messages.map(({ statusUpdate, user }, i) =>
    <UserStatus name={user.name} statusUpdate={statusUpdate} key={`user_status_${i}`} />
  );

const Peoplestatus = props =>
  <PeopleStatusListStyled>
    <div className="new-users">
      <h3>Latest status update</h3>
    </div>
    <PeoplestatusStyled>
      {renderUserStatus(props)}
    </PeoplestatusStyled>
  </PeopleStatusListStyled>;

// class Peoplestatus extends Component {
//   render() {
//     return (
//       <PeopleStatusListStyled>
//         <div className="new-users">
//           <h3>Latest status update</h3>
//         </div>
//         <PeoplestatusStyled>
//           {renderUserStatus(props)}
//         </PeoplestatusStyled>
//       </PeopleStatusListStyled>
//     );
//   }
// }

const mapStateToProps = ({ db: { usersStatus } }) => {
  return {
    messages: usersStatus.messages
  };
};

export default connect(mapStateToProps)(Peoplestatus);
