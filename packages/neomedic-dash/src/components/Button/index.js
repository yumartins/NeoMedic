import React from 'react';

import { string, bool } from 'prop-types';

import Loading from '../Loading';
import { Content, NavIcon } from './styles';

const Button = ({
  size,
  icon,
  label,
  submit,
  loading,
  appearance,
  ...rest
}) => (
  <Content
    {...rest}
    type={submit ? 'submit' : 'button'}
    size={size}
    appearance={appearance}
  >
    {loading
      ? <Loading appearance="secondary" />
      : label}

    {icon && (
      <NavIcon
        name={icon}
        size={18}
      />
    )}
  </Content>
);

Button.propTypes = {
  size: string,
  icon: string,
  label: string.isRequired,
  submit: bool,
  loading: bool,
  appearance: string,
};

Button.defaultProps = {
  size: 'lg',
  icon: '',
  submit: false,
  loading: false,
  appearance: 'primary',
};

export default Button;
