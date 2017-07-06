import React from 'react';
import { PropTypes } from 'prop-types';

import { TiMessage } from 'react-icons/lib/ti/';

import { UserMention, UserItemStyled, UserName } from './user_status.styled';

const UserStatus = ({ name, statusUpdate }) =>
  <UserItemStyled>
    <TiMessage />
    <UserName>
      {name}:{' '}
    </UserName>
    <UserMention>
      {statusUpdate}
    </UserMention>
  </UserItemStyled>;
export default UserStatus;

UserStatus.propTypes = {
  name: PropTypes.string,
  statusUpdate: PropTypes.string
};
