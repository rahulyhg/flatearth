import styled from 'styled-components';
import { Field } from 'redux-form';

import {
  mfSpacer,
  labelColor,
  fontSize,
  transitionSpeed,
  borderColor,
  focusColor,
  gap
} from '../constants.theme';

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

export const Input = styled.input`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  display: block;
  background: none;
  padding: ${mfSpacer}rem ${mfSpacer}rem ${mfSpacer / 2}rem;
  font-size: ${fontSize*1.4}rem;
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
  ,
  &:webkit-autofill,
  :webkit-autofill:hover,
  :webkit-autofill:focus
  :webkit-autofill,
  :webkit-autofill,
  :webkit-autofill:hover
  :webkit-autofill:focus,
  :webkit-autofill,
  :webkit-autofill:hover,
  :webkit-autofill:focus {
    border: 1px solid green;
    -webkit-text-fill-color: green;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const Textarea = styled(Field).attrs({
  component: props => (props.component ? props.component : 'input')
})`
  font-family: 'Josefin Sans', sans-serif;
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
  },
 &:webkit-autofill,
  :webkit-autofill:hover, 
  :webkit-autofill:focus
  :webkit-autofill, 
  :webkit-autofill,
  :webkit-autofill:hover
  :webkit-autofill:focus,
  :webkit-autofill,
  :webkit-autofill:hover,
  :webkit-autofill:focus {
    border: 1px solid green;
    -webkit-text-fill-color: green;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const FieldsetStyled = styled.fieldset`
  position: relative;
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
  margin-top: ${gap * 0.1}rem;
  margin-bottom: ${gap * 0.5}rem;
  width: 100%;
`;
