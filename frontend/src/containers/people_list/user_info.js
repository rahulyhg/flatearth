import React from 'react';

import {
  UserlinkStyled,
  UserimageStyled,
  UsercontentStyled
} from './user_info.styled';

export default ({
  userInfo: { name, profileImg, country }
}) =>
  <li>
    <UserlinkStyled href="#">
      <UserimageStyled src={profileImg} alt={name} />
      <UsercontentStyled>
        <strong>{name}</strong> from{' '}
        <strong>{country}</strong> connected
      </UsercontentStyled>
    </UserlinkStyled>
  </li>;
