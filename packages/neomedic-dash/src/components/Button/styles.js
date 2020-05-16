import { color, typograph, radius } from 'neomedic-styles';
import styled from 'styled-components';

import { Icon } from '../Icon';

const sizes = {
  sm: 'sm',
  lg: 'lg',
};

const appearances = {
  primary: 'primary',
  secondary: 'secondary',
};

export const NavIcon = styled(Icon)`
  margin-left: 8px;
  position: relative;
  top: -1px;
`;

export const Content = styled.button`
  font-size: ${typograph.size.s3}px;
  line-height: ${typograph.size.s3}px;
  font-weight: ${typograph.weight.semiBold};
  border-radius: ${radius.md}px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;

  /**
   * Sizes
   */
  ${({ size }) => size === sizes.sm && `
    padding: 8px 16px;
  `}

  ${({ size }) => size === sizes.lg && `
    padding: 22px 32px;
  `}

  /**
   * Appearences
   */
  ${({ appearance }) => appearance === appearances.primary && `
    background-color: ${color.primary._500};
    color: ${color.gray._100};
    border-color: ${color.primary._500};

    ${NavIcon} path {
      fill: ${color.gray._100};
    }
  `}

  ${({ appearance }) => appearance === appearances.secondary && `
    background-color: transparent;
    color: ${color.primary._500};
    border-color: ${color.primary._500};

    ${NavIcon} path {
      fill: ${color.primary._500};
    }
  `}
`;
