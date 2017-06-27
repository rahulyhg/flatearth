import React, { Component } from 'react';

import HeaderStyled from './header.styled';

import HeaderItem from './nav_styled/nav_item.styled';
import HeaderList from './nav_styled/header_list.styled';

import LinkStyled from './nav_styled/link.styled';
import LogoStyled from '../../theme/components/logo.styled';
import NavStyled from '../../theme/components/navbar.styled';

class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <NavStyled>
          <HeaderList>
            <HeaderItem>
              <LinkStyled>INFO</LinkStyled>
            </HeaderItem>
            <HeaderItem>
              <LinkStyled>Person</LinkStyled>
            </HeaderItem>
          </HeaderList>
          <LogoStyled>LOGO</LogoStyled>
        </NavStyled>
      </HeaderStyled>
    );
  }
}

export default Header;
