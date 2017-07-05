// @flow
import Homewrapper from './homewrapper.styled';

const FormWrapped = Homewrapper.withComponent('form');

const FormTheme = FormWrapped.extend`
  border: 1px solid #f1f1f1;
  grid-column: 2 / 2;
  padding: 2rem;
`;

export default FormTheme;
