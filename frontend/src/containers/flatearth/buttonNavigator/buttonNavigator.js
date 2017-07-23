// @flow
import React from 'react';
import ButtonNavigatorStyled from './buttonNavigator.styled';

import { connect } from 'react-redux';

const findUserPosition = (callback: Function) => () => {
  navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
    callback({ latitude, longitude });
  });
  // console.log('latitude: ', latitude);
  // console.log('longitude: ', longitude);
  // const mylocation = new google.maps.LatLng(latitude, longitude);
  // const randomPosition = new google.maps.LatLng(latitude, longitude - 10);
  // const distance = google.maps.geometry.spherical.computeDistanceBetween(
  //   mylocation,
  //   randomPosition
  // );
};

const ButtonNavigator = ({ callback }: { callback: Function }) =>
  <ButtonNavigatorStyled orange onClick={findUserPosition(callback)}>
    Find my position
  </ButtonNavigatorStyled>;

const mapStateToProps = ({ locals: { userInfo } }) => {
  return {
    prop: userInfo
  };
};

export default connect(mapStateToProps)(ButtonNavigator);
