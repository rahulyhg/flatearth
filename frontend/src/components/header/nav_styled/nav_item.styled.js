import styled from 'styled-components';
const NavItem = styled.li`
  display:flex;
  align-self:flex-start;
  border-right: 2px solid #fff;
  border-left: 2px solid #fff;
  padding: 1rem 2rem 1rem 2rem;
  &:hover {
    background:#03A9F4;
  }
  &:first-child {
    border-right:none;
  }
`;

export default NavItem;
