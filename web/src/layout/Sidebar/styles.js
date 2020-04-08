import styled from 'styled-components';
import { color, typograph, radius, shadow } from '../../styles';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../components/Icon';

export const Image = styled.img`
  width: 140px;
  margin: 0 40px;
`;

export const Article = styled.article`
  width: 240px;
  padding: 40px 0;
  background-color: ${color.gray._100};
  position: fixed;
  height: 100vh;
  box-shadow: 32px 0 24px 0 rgba(217, 228, 255, .24);
  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
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
  padding: 16px 40px;
  position: relative;
  font-size: ${typograph.size.s3};

  &:not(:first-child) {
    margin-top: 16px;
  }

  &::after {
    content: '';
    background-color: transparent;
    position: absolute;
    right: 0;
    width: 2px;
    height: 100%;
  }

  &.active {
    color: ${color.primary._500};
    background-color: ${color.primary.transparency._100};

    svg path {
      fill: ${color.primary._500};
    }

    &::after {
      background-color: ${color.primary._500};
    }
  }
`;

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
  margin-top: auto;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    background-color: transparent;
    position: absolute;
    right: 0;
    width: 2px;
    height: 100%;
  }

  &.active {
    color: ${color.primary._500};
    background-color: ${color.primary.transparency._100};

    &::after {
      background-color: ${color.primary._500};
    }

    ${Name} {
      color: ${color.primary._500};
    }

    ${Link} {
      color: ${color.primary._400}
    }
  }
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
