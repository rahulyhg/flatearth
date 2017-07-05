import styled from 'styled-components';
import { UserlistStyled } from '../people_list/people_list.styled';

const PeoplestatusStyled = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  list-style: none;
`;

export const PeopleStatusListStyled = UserlistStyled.extend`
  height: 53vh;
`;

export default PeoplestatusStyled;
