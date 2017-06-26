import styled from 'styled-components';

const HeaderStyled = styled.div`
  display:grid;
  border:transparent 2px solid;
  border-radius:50%;
  grid-template-columns: repeat(4, 10fr);
  grid-template-rows: repeat(4, 10fr);
  grid-gap:.75rem;
  grid-auto-rows: minmax(10fr, 100fr);
`;

export default HeaderStyled;
