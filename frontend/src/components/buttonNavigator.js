import React from 'react';
import { ButtonNavigatorStyled } from './buttonNavigator.styled';

const findUserPosition = () => {
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
  });
};

const ButtonNavigator = () => {
  return (
    <ButtonNavigatorStyled orange onClick={findUserPosition}>
      Find my position
    </ButtonNavigatorStyled>
  );
};

export default ButtonNavigator;
