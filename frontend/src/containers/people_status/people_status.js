// @flow
import React from 'react';
import { connect } from 'react-redux';

import PeoplestatusStyled, { PeopleStatusListStyled } from './people_status.styled';
import UserStatus from './user_status';

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

const mapStateToProps = ({ db: { usersStatus } }) => ({
  messages: usersStatus.messages
});

export default connect(mapStateToProps)(Peoplestatus);
