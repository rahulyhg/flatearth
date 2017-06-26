// @flow
import styled from 'styled-components';
import { mainThemeColor } from '../constants.theme';

const Header = styled.header`
  grid-row: 1 / 1;
  grid-column: 1 / -1;
  background: ${mainThemeColor}
`;

export default Header;
