// @flow
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { HomeStyled, ImageStyled as Image } from './flatearth.styled';
import img from '../../assets/blue-earth.jpg';
import Footer from './footer/status_form';
import ButtonNavigator from './buttonNavigator/buttonNavigator';

class FlatEarth extends Component {
  state = {
    latitude: null,
    longitude: null
  };
  findUserPosition({ latitude, longitude }: { latitude: number, longitude: number }) {
    if (this.props.authenticated) {
      this.setState({ latitude, longitude });
    } else {
      this.props.history.push('/signin');
    }
  }
  render() {
    const { latitude, longitude } = this.state;
    return (
      <HomeStyled>
        <Image src={img} />
        <ButtonNavigator callback={this.findUserPosition.bind(this)} />
        <p>
          latitude: {latitude}
        </p>
        <p>
          latutude: {longitude}
        </p>
        <Footer />
      </HomeStyled>
    );
  }
}

FlatEarth.propTypes = {
  authenticated: PropTypes.bool,
  history: PropTypes.object
};

export default FlatEarth;
