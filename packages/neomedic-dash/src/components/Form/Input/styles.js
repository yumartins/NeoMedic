import {
  color,
  easing,
  radius,
  typograph,
} from 'neomedic-styles';
import styled from 'styled-components';

import { Icon } from '../../Icon';

export const View = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${typograph.size.s3}px;
  font-weight: ${typograph.weight.semiBold};
  color: ${color.gray._600};
  position: absolute;
  top: 24px;
  left: 16px;
  line-height: 20px;
  transition: all .5s ${easing.rubber};
  cursor: text;
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

  ${({ focus }) => ! focus} {
    ${Label} {
      color: ${color.gray._500};
      font-size: ${typograph.size.s2}px;
      font-weight: ${typograph.weight.regular};
      top: 12px;
      cursor: initial;
    };

    ${Wrapper} {
      padding-top: 32px;
    };

    ${Search} path {
      fill: ${color.primary._500};
    }
  }

  ${({ error }) => error && `
    ${Label} {
      color: ${color.danger._500};
    }

    ${Wrapper} {
      border-color: ${color.danger._500};
    }
  `}
`;

export const Error = styled.span`
  font-size: ${typograph.size.s2}px;
  margin-top: 8px;
  color: ${color.danger._500};
  text-align: right;
`;
