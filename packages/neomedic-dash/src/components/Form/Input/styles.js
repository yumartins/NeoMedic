import styled from 'styled-components';
import {
  color,
  easing,
  radius,
  typograph,
} from 'neomedic-styles';
import { Icon } from '../../Icon';

export const View = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: ${typograph.size.s3};
  font-weight: ${typograph.weight.semiBold};
  color: ${color.gray._600};
  position: absolute;
  top: 24px;
  left: 16px;
  line-height: 20px;
  transition: all .5s ${easing.rubber};
`;

export const Wrapper = styled.input`
  width: 100%;
  height: 64px;
  padding: 16px;
  border-radius: ${radius.md}px;
  border: 1px solid ${color.gray._300};
  color: ${color.gray._700};
  font-weight: ${typograph.weight.semiBold};
  transition: all .5s ${easing.rubber};
`;

export const Search = styled(Icon)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  cursor: pointer;
  transition: all .5s ${easing.basic};

  path {
    fill: ${color.gray._600}
  }
`;

export const Target = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  ${({ focus }) => !focus} {
    ${Label} {
      color: ${color.gray._500};
      font-size: ${typograph.size.s2};
      font-weight: ${typograph.weight.regular};
      top: 12px;
    };

    ${Wrapper} {
      padding-top: 32px;
    };

    ${Search} path {
      fill: ${color.primary._500};
    }
  }
`;

export const Error = styled.span``;
