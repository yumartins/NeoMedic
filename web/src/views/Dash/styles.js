import styled from 'styled-components';
import { color, shadow, typograph } from '../../styles';

export const View = styled.div`
  display: flex;
`;

export const Container = styled.article`
  background-color: ${color.gray._100};
  box-shadow: ${({ expand }) => expand && shadow.horizontal};
  padding: 140px 48px 48px 48px;
  min-width: ${({ full }) => (full ? '100%' : '864px')};
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.h4`
  font-size: ${typograph.size.s3};
  font-weight: ${typograph.weight.regular};
  color: ${color.gray._600};
`;

export const Title = styled.h1`
  font-size: ${typograph.size.l2};
  font-weight: ${typograph.weight.bold};
  color: ${color.gray._1100};
  `;
