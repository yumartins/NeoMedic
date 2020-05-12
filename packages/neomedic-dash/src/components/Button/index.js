import React from 'react';
import { string, bool } from 'prop-types';
import { Content, NavIcon } from './styles';

const Button = ({
  size,
  icon,
  label,
  submit,
  appearance,
  ...rest
}) => (
  <Content
    {...rest}
    type={submit ? 'submit' : 'button'}
    size={size}
    appearance={appearance}
  >
    {label}
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
  appearance: string,
};

Button.defaultProps = {
  size: 'lg',
  icon: '',
  submit: false,
  appearance: 'primary',
};

export default Button;
