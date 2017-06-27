import React, { Component } from 'react';
import FooterStyled from './footer.styled';

class Footer extends Component {
  render() {
    return (
      <FooterStyled>
        <form>
          <label htmlFor="user_status" />
          <input type="text" id="user_status" />
          <button>Send</button>
        </form>
        {this.props.children}
      </FooterStyled>
    );
  }
}

export default Footer;
