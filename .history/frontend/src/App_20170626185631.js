import React, { Component } from 'react';

import MainStyled from './theme/main.styled';
import HeaderStyled from './theme/components/header.styled';
import LinkStyled from './theme/components/link.styled';
import LogoStyled from './theme/components/logo.styled';
// import NavItem from './theme/components/navitem.styled';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MainStyled>
        <HeaderStyled>
          <LinkStyled></LinkStyled>
          <LinkStyled></LinkStyled>
          <LogoStyled></LogoStyled>
        </HeaderStyled>
      </MainStyled>
    );
  }
}

export default App;
