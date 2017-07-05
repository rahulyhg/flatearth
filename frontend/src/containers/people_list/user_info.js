import React from 'react';

import { UserlinkStyled, UserimageStyled, UsercontentStyled } from './user_info.styled';
import { TiAdjustContrast } from 'react-icons/lib/ti/';
import yinYang from '../../assets/Yin_YangSVG.svg';

const style = {
  width: 16,
  height: 16
};
export default ({ userInfo: { name, profileImg } }) =>
  <li>
    <UserlinkStyled href="#">
      {profileImg
        ? <UserimageStyled src={profileImg} alt={name} />
        : <img src={yinYang} style={style} />}
      <UsercontentStyled>
        <strong>
          {name}
        </strong>
      </UsercontentStyled>
    </UserlinkStyled>
  </li>;
