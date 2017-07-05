import React, { Component } from 'react';


import { HomeStyled, ImageStyled as Image } from './flatearth.styled';
import img from '../../assets/blue-earth.jpg';
import Footer from './footer/status_form';
import ButtonNavigator from '../../components/buttonNavigator';

class FlatEarth extends Component {
  render() {
    return (
      <HomeStyled>
        <Image src={img} />
        <ButtonNavigator></ButtonNavigator>
        <Footer />
      </HomeStyled>
    );
  }
}

export default FlatEarth;
