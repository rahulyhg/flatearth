// @flow
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mainThemeColor } from '../../theme/constants.theme';

export const HeaderStyled = styled.header`
  grid-row: 1 / 1;
  grid-column: 1 / -1;
  background: ${mainThemeColor};
`;

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  height: auto;
  align-items: center;
  margin: 0;
  align-self: center;
`;

export const StyledLink = styled(Link)`
  text-decoration:none;
  color:#fff;
  text-transform:uppercase;
  padding: 1rem 2rem 1rem 2rem;
  & :visited {
    color:#3F51B5;
  }
`;

export const HeaderItem = styled.li`
  display: flex;
  // align-self: flex-start;
  border-right: 2px solid #fff;
  border-left: 2px solid #fff;
  &:hover {
    background: #03a9f4;
  }
  &:not(:last-child) {
    border-right: none;
  }
`;

export const LogoStyled = styled(Link)`
  display: flex;
  flex-shrink: 1;
  flex-grow: 3;
  flex: 1;
  padding: 1rem;
  font-size:1.125rem;
  justify-content: center;
  border: 2px solid #fff;
  background: black;
  text-decoration: none;
  color: #fff;
  padding: 1rem 2rem 1rem 2rem;
  & :visited {
    color:#3F51B5;
  }
  &:hover {
    background:#03A9F4;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  flex: 3 auto;
  padding-left: 2rem;
  list-style: none;
  margin: 0;
  align-self: center;
`;
