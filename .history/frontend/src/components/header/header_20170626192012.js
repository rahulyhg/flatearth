import React, { Component } from 'react';
import HeaderStyled from './header.styled';
import HeaderItem from './header_item/header_item.styled';
import LinkStyled from './link/link.styled';

class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <HeaderItem><LinkStyled>
        
        </LinkStyled> INFO</HeaderItem>
        <HeaderItem>PERSON</HeaderItem>
      </HeaderStyled>
    );
  }
}

export default Header;
