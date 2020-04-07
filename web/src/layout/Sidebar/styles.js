import styled from 'styled-components';
import { color } from '../../styles';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';

export const Image = styled.img`
  width: 140px;
`;

export const Article = styled.article`
  width: 240px;
  padding: 40px;
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
  path {
    fill: ${color.gray._600};
  }
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  color: ${color.gray._600};
`;
