import React from 'react';
import { TiMessage } from 'react-icons/lib/ti/';

import {
  UserMention,
  UserItemStyled,
  UserName
} from './user_status.styled';

const UserStatus = ({ name, statusUpdate }) =>
  <UserItemStyled>
    <TiMessage />
    <UserName>{name}: </UserName><UserMention>{statusUpdate}</UserMention>
  </UserItemStyled>;
export default UserStatus;
