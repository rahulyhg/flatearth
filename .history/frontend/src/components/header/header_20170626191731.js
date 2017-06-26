import React, { Component } from 'react';
import HeaderStyled from './header.styled';
import HeaderItem from './header_item/header_item.styled';

class Header extends Component {
  render() {
    return (
      <HeaderStyled>  
        <HeaderItem></HeaderItem>
        <HeaderItem></HeaderItem>
      </HeaderStyled>
    );
  }
}

export default Header;