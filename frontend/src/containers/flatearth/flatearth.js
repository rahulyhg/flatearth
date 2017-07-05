// @flow
import React, { Component } from 'react';

import { HomeStyled, ImageStyled as Image } from './flatearth.styled';
import img from '../../assets/blue-earth.jpg';
import Footer from './footer/status_form';
import ButtonNavigator from './buttonNavigator/buttonNavigator';

class FlatEarth extends Component {
  findUserPosition({ latitude, longitude }) {
    if (this.props.authenticated) {
      this.setState({ latitude, longitude });
    } else {
      this.props.history.push('/signin');
    }
  }
  render() {
    return (
      <HomeStyled>
        <Image src={img} />
        <ButtonNavigator callback={this.findUserPosition} />
        <Footer />
      </HomeStyled>
    );
  }
}

export default FlatEarth;
