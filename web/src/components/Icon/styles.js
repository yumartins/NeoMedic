import styled from 'styled-components';

export const SVG = styled.svg`
  display: inline-block;
  vertical-align: middle;
`;

export const Path = styled.path`
  fill: ${(props) => props.color};
`;
