// @flow
import Homewrapper from './homewrapper.styled';

const FormWrapped = Homewrapper.withComponent('form');

const FormTheme = FormWrapped.extend`
  border: 2px solid red;
  grid-column: 2 / 2;
  padding: 2rem;
`;

export default FormTheme;
