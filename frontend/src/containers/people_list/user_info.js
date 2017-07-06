import React from 'react';
import { PropTypes } from 'prop-types';

import { UserlinkStyled, UserimageStyled, UsercontentStyled } from './user_info.styled';

import yinYang from '../../assets/Yin_YangSVG.svg';

const style = {
  width: 16,
  height: 16
};

const UserInfo = ({ userInfo: { name, profileImg } }) =>
  <li>
    <UserlinkStyled href="#">
      {profileImg ? <UserimageStyled src={profileImg} alt={name} /> : <img src={yinYang} style={style} />}
      <UsercontentStyled>
        <strong>
          {name}
        </strong>
      </UsercontentStyled>
    </UserlinkStyled>
  </li>;

UserInfo.propTypes = {
  userInfo: PropTypes.object.isRequired
};

export default UserInfo;
