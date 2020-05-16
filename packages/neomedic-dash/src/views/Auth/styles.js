import { Link } from 'react-router-dom';

import { color, typograph, easing } from 'neomedic-styles';
import styled from 'styled-components';

import Button from '../../components/Button';

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

export const Logo = styled.img`
  margin: 0 auto 48px 0;
  width: 140px;
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
  position: relative;
`;

export const InputForm = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: ${({ reveal }) => (reveal ? 'flex' : 'none')}
`;

export const Action = styled(Button)`
  margin-top: 24px;
  width: 100%;
  justify-content: center;
`;

export const Recovery = styled.span`
  position: absolute;
  display: flex;
  bottom: 40px;
  color: ${gray._600};
  font-size: ${size.s2};
  left: 50%;
  transform: translateX(-50%);
`;

export const RecoveryLink = styled(Link)`
  margin-left: 4px;
  color: ${primary._500};
  font-weight: ${weight.semiBold};
`;

export const Ilustation = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${primary._600};
`;
