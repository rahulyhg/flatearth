// @flow
import React, { Component } from 'react';
import { FlatEarthMain, ButtonNavigator } from './flatearth.styled';
import { connect } from 'react-redux';
// TODO import CompassSVG from '../../assets/compass.svg';

class Flatearth extends Component {
  constructor() {
    super();
    this.findUserPosition = this.findUserPosition.bind(this);
  }
  findUserPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
    });
  }
  render() {
    return (
      <FlatEarthMain>
        WIP (Work-in-Progress)
        <ButtonNavigator orange onClick={this.findUserPosition}>
          Find my position
        </ButtonNavigator>
      </FlatEarthMain>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     : state.prop
//   }
// }

export default connect()(Flatearth);
