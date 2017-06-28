// @flow
import React, { Component } from 'react';

import MainStyled from './theme/main.styled';
import Main from './router';

import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Peoplelist from './containers/people_list/people_list';
import Peoplestatus from './containers/people_status/people_status';

class App extends Component {
  render() {
    return (
      <MainStyled>
        <Header />
        <Main />
        <Sidebar>
          <Peoplelist>NEW PEOPLE</Peoplelist>
          <Peoplestatus>NEW PEOPLE</Peoplestatus>
        </Sidebar>
      </MainStyled>
    );
  }
}

export default App;
