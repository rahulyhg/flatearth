// @flow
import styled from 'styled-components';

import { Homewrapper, ButtonTheme } from '../../theme/components.styled';

export const FlatEarthMain = styled(Homewrapper)`
  font-size: 2rem;
  & > p {
    font-size: 1.5rem;
  };
`;

export const ButtonNavigator = ButtonTheme.extend`
  padding: .85rem 2.13rem;
  color: #fff;
  margin: 1rem;
  overflow: hidden;
  z-index: 1;
  &:after {
    display: block;
    position: absolute;
    content: "";
    width: 110%;
    height: 0;
    padding-bottom: 110%;
    top: 0%;
    left: 50%;
    border: 2px solid green;
    color: blue;
    transform: translate(-50%, -50%) scale(0, 0);
    transition: transform 0.1s ease 0s;
    z-index: 0;
  }
  &:hover {
    &:after {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1, 1);
      transition: transform 0.9s ease 0s;
    }
  }
`;
