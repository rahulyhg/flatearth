import styled from 'styled-components';

const Sidebar = styled.aside`
  display: flex;
  flex-direction:column;  
  grid-column: ${props => (props.top ? '4 / 4' : '4 / -1')};
  grid-row: 2 / -1;
  padding: 1rem;
`;

export default Sidebar;
