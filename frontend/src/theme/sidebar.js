import styled from 'styled-components';

const Sidebar = styled.aside`
  display:grid;
  background-color: ${props => props.top ? 'blue' : 'yellow'};
  grid-column: ${props => props.top ? '4 / -1' : '4 / -1'};
  grid-row: ${props => props.top ? '2 / -1' : '4 / 5'};
`;

export default Sidebar;
