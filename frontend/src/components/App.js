import React, { Component } from 'react';

import MainStyled from '../theme/main.styled';
import Header from './header/header';
import Home from './home/home';
import Sidebar from '../theme/sidebar';
import Newpeople from '../containers/new_people';
import Footer from './footer/footer';

class App extends Component {
  render() {
    return (
      <MainStyled>
        <Header />
        <Home />
        <Newpeople top>NEW PEOPLE</Newpeople>
        <Sidebar>LAST COMMENTS</Sidebar>
        <Footer>FOOTER</Footer>
      </MainStyled>
    );
  }
}

export default App;
