import { color, typograph } from 'neomedic-styles';
import styled from 'styled-components';

import { Icon } from '../../Icon';

export const View = styled.div`
  border-radius: 8px;
  border: 1px solid ${color.gray._300};
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img``;

export const ViewIcon = styled.div`
  background-color: ${color.primary._100};
  padding: 32px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const IconUser = styled(Icon)`
  position: relative;
  top: -1px;
  width: 72px;
  height: 72px;
  fill: ${color.primary._500};
`;

export const Content = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h5`
  font-size: ${typograph.size.m1}px;
  color: ${color.gray._700};
`;

export const Profession = styled.span`
  font-size: ${typograph.size.s3}px;
  color: ${color.gray._600};
  margin-top: 4px;
`;
