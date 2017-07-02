// @flow
// eslint-disable prefer-template
import styled from 'styled-components';
import WavesEffect from '../effects/waves.effect';

// const Button = WavesEffect.withComponent('button');

const ButtonStyled = styled.button`
  display: flex;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12),
    0 3px 1px -2px rgba(0, 0, 0, .2);
  text-transform: uppercase;
  padding: 0 2rem;
  line-height: 36px;
  border-radius: 2px;
  border: none;
  background: ${props => (props.orange ? '#FFC107' : '#2196f3')};
  position: relative;
  overflow: hidden;
  margin-right: ${props => (props.padding ? '2rem' : 0)};
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 20%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, .5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }
  &:focus:not(:active)::after {
    animation: ${props => (props.waves ? WavesEffect : WavesEffect + ' 1.5s ease-out')};
  }
`;

export default ButtonStyled;
