import React, { Component } from 'react';
import HeaderStyled from './header.styled';
import HeaderItem from './header_item/header_item.styled';
import LinkStyled from './link/link.styled';

class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <HeaderItem>
          <LinkStyled>INFO</LinkStyled>
        </HeaderItem>
        <HeaderItem>
        <LinkStyled>Person</LinkStyled></HeaderItem>

      </HeaderStyled>
    );
  }
}

export default Header;
