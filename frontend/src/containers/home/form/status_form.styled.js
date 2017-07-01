// @flow
import styled from 'styled-components';

export const FormInput = styled.form`
  padding-left: 3.125rem;
  padding-top: 10px;
  display: flex;
  width: 100%;
`;

export const TextareaStyled = styled.textarea.attrs({
  placeholder: 'Type message to update your state'
})`
  width: 100%;
`;
