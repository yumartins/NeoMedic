import styled from 'styled-components';
import { Form } from '@unform/web';
import { NavLink } from 'react-router-dom';
import {
  color, shadow, typograph, radius,
} from '../../styles';

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
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Right = styled.div`
  margin-left: auto;
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

export const Search = styled(Form)`
  width: 100%;
  margin-top: 48px;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  margin-top: 72px;
  display: flex;
  align-items: center;
`;

export const ListItem = styled.li`
  color: ${color.gray._600};
  font-size: ${typograph.size.s3};
  padding: 8px 16px;
  margin-right: 32px;
  border-radius: ${radius.md}px;
  border: 1px solid ${color.gray._300};
  cursor: pointer;
`;

export const Card = styled(NavLink)`

`;
