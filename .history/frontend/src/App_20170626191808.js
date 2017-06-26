import React, { Component } from 'react';

import MainStyled from './theme/main.styled';
import HeaderStyled from './components/header';
// import LinkStyled from './theme/components/link.styled';
// import NavitemStyled from './theme/components/navitem.styled';
// import LogoStyled from './theme/components/logo.styled';
// import NavStyled from './theme/components/navbar.styled';
// import NavItem from './theme/components/navitem.styled';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MainStyled>
        <HeaderStyled>
          <NavStyled>
            <NavitemStyled>
              <LinkStyled>Info</LinkStyled>
            </NavitemStyled>
            <NavitemStyled>
              <LinkStyled>User</LinkStyled>
            </NavitemStyled>
            <LogoStyled>LOGO</LogoStyled>
          </NavStyled>
        </HeaderStyled>
      </MainStyled>
    );
  }
}

export default App;
