// @flow
import styled from 'styled-components';
import { Label, Textarea } from '../../../theme/components/ReduxFormFieldset.styled';
import { PulseEffect } from '../../../theme/effects/pulse.effect';
import ButtonTheme from '../../../theme/components/button.styled';

export const FormInput = styled.form`
  padding-left: 3.125rem;
  padding-top: 10px;
  display: flex;
  width: 100%;
`;

export const TextareaStyled = styled(Textarea)`
  font-size:2rem;
  cursor: pointer;
  background-size:cover;
  background-repeat: no-repeat;
  background-color: #B0BEC5;
  box-shadow: 0 0 0 0 rgba(232, 76, 61, 0.7);
  border: none;
  position: relative;
  height: auto;
`;

export const ButtonStatus = styled(ButtonTheme)`
  animation: ${PulseEffect} 5s infinite cubic-bezier(0.66, 0, .1, 1);
  box-shadow: 0 0 0 0 #90CAF9;
  color:#fff;
`;
