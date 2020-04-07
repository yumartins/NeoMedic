import styled from 'styled-components';

export const SVG = styled.svg`
  display: flex;
  align-items: center;
  transform: rotate(180deg) scaleX(-1);
`;

export const Path = styled.path`
  fill: ${(props) => props.color};
`;
