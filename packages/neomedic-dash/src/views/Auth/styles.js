import { color, typograph, easing } from 'neomedic-styles';
import styled from 'styled-components';

import Button from '../../components/Button';
import Input from '../../components/Form/Input';

const {
  size,
  weight,
} = typograph;

const {
  gray,
  primary,
} = color;

export const View = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Title = styled.h1`
  font-size: ${({ selected }) => (selected ? size.l1 : size.m1)};
  line-height: ${size.l1};
  font-weight: ${({ selected }) => (selected ? weight.bold : weight.regular)};
  color: ${({ selected }) => (selected ? gray._700 : gray._500)};
  transition: all .5s ${easing.rubber};
  cursor: pointer;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  ${Title}:last-child {
    margin-left: 32px;
  }
`;

export const Container = styled.div`
  max-width: 564px;
  width: 100%;
  padding: 64px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputForm = styled(Input)`
  margin-bottom: 24px;
`;

export const Action = styled(Button)`
  margin-top: 24px;
  width: 100%;
  justify-content: center;
`;

export const Ilustation = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${primary._600};
`;
