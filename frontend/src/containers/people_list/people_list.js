// @flow
import React, { Component } from 'react';

import {
  UserlistStyled,
  UserlinkStyled,
  UsercontentStyled,
  UserimageStyled,
  PeoplelistStyled
} from './people_list.styled';

const pseudoUsers: Array<Object> = [
  {
    profileImg: 'https://randomuser.me/api/portraits/women/51.jpg',
    name: 'Wind',
    country: 'Ukraine'
  },
  {
    profileImg: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Fire',
    country: 'Thailand'
  },
  {
    profileImg: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Water',
    country: 'China33333333333333333333333333123123'
  }
];

const UserInfo = ({ userInfo: { name, profileImg, country } }) =>
  <li>
    <UserlinkStyled href="#">
      <UserimageStyled src={profileImg} alt={name} />
      <UsercontentStyled>
        <strong>{name}</strong> from <strong>{country}</strong> connected
      </UsercontentStyled>
    </UserlinkStyled>
  </li>;

class Peoplelist extends Component {
  render() {
    return (
      <UserlistStyled>
        <div className="new-users">
          <h3>Meet new people</h3>
        </div>
        <PeoplelistStyled>
          <UserInfo userInfo={pseudoUsers[0]} />
          <UserInfo userInfo={pseudoUsers[1]} />
          <UserInfo userInfo={pseudoUsers[2]} />
        </PeoplelistStyled>
      </UserlistStyled>
    );
  }
}

export default Peoplelist;
