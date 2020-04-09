import styled from 'styled-components';
import { color, typograph, shadow, radius } from '../../styles';
import { NavLink } from 'react-router-dom';

export const Article = styled.section`
  padding: 56px 48px 48px 56px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1``;

export const Name = styled.h6`
  font-size: ${typograph.size.s2};
  font-weight: ${typograph.weight.semiBold};
  color: ${color.gray._1000};
`;

export const Link = styled.span`
  font-size: ${typograph.size.s1};
  color: ${color.gray._600};
`;

export const Profile = styled(NavLink)`
  margin-left: auto;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Picture = styled.img`
  width: 48px;
  height: 48px;
  border-radius: ${radius.lg}px;
  border: 4px solid ${color.gray._100};
  box-shadow: ${shadow.md};
`;

export const Content = styled.div`
  margin-left: 8px;
`;

