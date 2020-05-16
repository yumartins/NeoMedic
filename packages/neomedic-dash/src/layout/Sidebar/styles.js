
import { NavLink } from 'react-router-dom';

import {
  color, typograph, radius, shadow,
} from 'neomedic-styles';
import styled from 'styled-components';

import { Icon } from '../../components/Icon';

export const Image = styled.img`
  width: 140px;
`;

export const Article = styled.article`
  width: ${({ full }) => (full ? '100%' : '864px')};
  padding: 32px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(Icon)`
  margin-right: 8px;
  position: relative;
  top: -1px;

  path {
    fill: ${color.gray._600};
  }
`;

export const Item = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${color.gray._600};
  padding: 16px 32px;
  font-size: ${typograph.size.s3}px;
  border-radius: ${radius.lg}px;
  margin: 0 8px;

  &.active {
    color: ${color.primary._500};
    background-color: ${color.primary.transparency._100};

    svg path {
      fill: ${color.primary._500};
    }
  }
`;

export const Name = styled.h6`
  font-size: ${typograph.size.s2}px;
  font-weight: ${typograph.weight.semiBold};
  color: ${color.gray._1000};
  margin-left: 8px;
`;

export const Profile = styled(NavLink)`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Picture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: ${radius.lg}px;
  border: 4px solid ${color.gray._100};
  box-shadow: ${shadow.md};
`;
