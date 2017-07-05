// @flow
import React from 'react';

import MainStyled from './theme/main.styled';
import Main from './router';

import Header from './containers/header/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

const App = () =>
  <MainStyled>
    <Header />
    <Main />
    <Sidebar />
    <Footer />
  </MainStyled>;

// class App extends Component {
//   render() {
//     return (
//       <MainStyled>
//         <Header />
//         <Main />
//         <Sidebar>
//           <Peoplelist />
//           <Peoplestatus />
//         </Sidebar>
//       </MainStyled>
//     );
//   }
// }

export default App;
