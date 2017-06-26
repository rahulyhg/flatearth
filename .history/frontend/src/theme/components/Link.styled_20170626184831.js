import { a } from 'styled-components';

const StyledLink = a`
  text-decoration:none;
  color:#fff;
  & :visited {
    color:#fdf;
  }
`;

export default StyledLink;
