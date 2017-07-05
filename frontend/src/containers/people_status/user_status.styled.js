import styled from 'styled-components';

export const UserItemStyled = styled.li`
  padding-botton: 3px;
`;

export const UserMention = styled.span`
  font-size: 1rem;
  word-wrap: break-word;
`;

export const UserName = UserMention.extend`
  background-color: #f5f5f5;
`;
