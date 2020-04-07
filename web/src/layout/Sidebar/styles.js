import styled from 'styled-components';
import { color } from '../../styles';
import { Link } from 'react-router-dom';

export const Image = styled.img`
  height: 32px;
`;

export const Article = styled.article`
  width: 240px;
  padding: 40px;
  background-color: ${color.gray._100};
  position: fixed;
  height: 100vh;
  box-shadow: 32px 0 24px 0 rgba(217, 228, 255, .24);
`;

export const Navigation = styled.div``;

export const Item = styled(Link)``;
