import styled from 'styled-components';

const MainBox = styled.div`
  display: grid;
  border: transparent 2px solid;
  border-radius: 50%;
  grid-template-columns: repeat(4, minmax(100px, 100fr));
  grid-template-rows: auto 100fr minmax(min-content, 100px);
  grid-gap: .75rem;
  grid-auto-rows: minmax(10fr, auto);
`;

export default MainBox;
