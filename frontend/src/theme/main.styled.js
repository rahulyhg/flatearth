import styled from 'styled-components';

const MainBox = styled.div`
  display: grid;
  border: transparent 2px solid;
  border-radius: 50%;
  grid-template-columns: repeat(4, minmax(200px, 100fr));
  grid-template-rows: auto 100fr minmax(min-content, 200px);
  grid-gap: .75rem;
  grid-auto-rows: minmax(10fr, auto), fit-content(400px);
  // height: calc(100% - 10px);
`;

export default MainBox;
