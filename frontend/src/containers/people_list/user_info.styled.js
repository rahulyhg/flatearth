// @flow
import styled from 'styled-components';

export const UserlinkStyled = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  word-break: break-all;
  &:visited {
    color: #000;
  }
`;

/* Shorten length of country and name */

export const UsercontentStyled = styled.span`
  font-size: 1.2rem;
  color: #000;
  overflow: hidden;
  /* for set '...' in absolute position */
  position: relative;
  line-height: 1.2em;
  /* max-height = line-height (1.2) * lines max number (2) */
  max-height: 2.4em;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;
  &:before {
    /* points in the end */
    content: '';
    /* absolute position */
    position: absolute;
    /* set position to right bottom corner of block */
    right: 0;
    bottom: 0;
  }
  &:after {
    /* points in the end */
    content: '';
    /* absolute position */
    position: absolute;
    /* set position to right bottom corner of text */
    right: 0;
    width: 1em;
    /* set width and height */
    height: 1em;
    margin-top: 0.2em;
    background: inherit;
  }
  & > strong {
    font-size: 1.2rem;
  }
`;
export const UserimageStyled = styled.img`
  height: 3rem;
  border-radius: 50%;
  padding-right: .75rem;
`;
