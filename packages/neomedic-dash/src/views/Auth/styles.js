import { color } from 'neomedic-styles';
import styled from 'styled-components';

export const View = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Container = styled.div`
  max-width: 564px;
  width: 100%;
  padding: 64px;
`;

export const Ilustation = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${color.primary._600};
`;
