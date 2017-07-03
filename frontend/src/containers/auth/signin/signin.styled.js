// @flow
import styled from 'styled-components';
import { Field } from 'redux-form';

import { FormTheme } from '../../../theme/components.styled';

export const FormSignUp = FormTheme;

const fontSize = 1;
const transitionSpeed = '0.28s';
const mfSpacer = fontSize / 8;

/*  colors */
const borderColor = '#999';
const focusColor = '#337ab7';
const labelColor = '#70d09f';

/* */

const gap = fontSize * 1.5;

export const SigninForm = FormTheme;

export const Label = styled.label`
  position: absolute;
  top: 0.25rem;
  pointer-events: none;
  padding-left: ${mfSpacer}rem;
  color: ${labelColor};
  font-size: ${fontSize}rem;
  font-weight: normal;
  z-index: 1;
  transition: all ${transitionSpeed} ease;
`;

export const Icon = styled.i`
  position: relative;
  border-bottom: ${fontSize / 16}rem solid ${borderColor};
  display: block;

  &::before {
    content: '';
    height: (${fontSize} / 8);
    width: 0;
    left: 50%;
    bottom: (${fontSize} / -16);
    position: absolute;
    background: ${focusColor};
    z-index: 2;
    transition: left ${transitionSpeed} ease, width ${transitionSpeed} ease;
  }
`;

export const Textarea = styled(Field)`
  display: block;
  background: none;
  padding: ${mfSpacer}rem ${mfSpacer}rem ${mfSpacer / 2}rem;
  font-size: ${fontSize}rem;
  border-width: 0;
  border-color: transparent;
  line-height: 1.9rem;
  width: 100%;
  color: #000;
  transition: all ${transitionSpeed} ease;
  box-shadow: none;
  height: ${1 * 1.9}rem;
  &:focus,
  :valid {
    outline: none;

    ~ ${Label} {
      color: ${focusColor};
    }

    ~ ${Icon} {
      &::before {
        width: 100%;
        left: 0;
      }
    }
  }
`;

export const FieldsetStyled = styled.fieldset`
  position: relative;
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
  margin-top: ${gap * 0.1}rem;
  margin-bottom: ${gap * 0.5}rem;
`;

export const ControlsStyled = styled.div`
  display: flex;
  flex-direction: row;
`;
