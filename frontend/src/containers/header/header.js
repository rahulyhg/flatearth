import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import {
  HeaderStyled,
  HeaderItem,
  HeaderList,
  StyledLink as Link,
  LogoStyled,
  NavStyled
} from './header.styled';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <HeaderItem key="link-info">
          <Link to="/">INFO</Link>
        </HeaderItem>,
        <HeaderItem key="link-signin">
          <Link to="/profile">User</Link>
        </HeaderItem>
      ];
    }
    return [
      <HeaderItem key="link-info">
        <Link to="/">INFO</Link>
      </HeaderItem>,
      <HeaderItem key="link-signin">
        <Link to="/signin">sign in</Link>
      </HeaderItem>
    ];
  }
  render() {
    return (
      <HeaderStyled>
        <NavStyled>
          <HeaderList>
            {this.renderLinks()}
          </HeaderList>
          <LogoStyled to="/flatearth">FLAT EARTH</LogoStyled>
        </NavStyled>
      </HeaderStyled>
    );
  }
}
Header.propTypes = {
  authenticated: PropTypes.bool
};

const mapStateToProps = ({ locals: { auth } }) => ({
  authenticated: auth.authenticated
});

export default connect(mapStateToProps)(Header);
