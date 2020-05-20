import React from 'react';

import { string, number } from 'prop-types';

import { SVG, Path } from './styles';

const Icon = ({
  name,
  size,
  color,
  ...rest
}) => (
  <SVG
    {...rest}
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 1024 1024"
  >
    <Path
      color={color}
      d={name}
    />
  </SVG>
);

Icon.propTypes = {
  name: string.isRequired,
  size: number,
  color: string,
};

Icon.defaultProps = {
  size: 16,
  color: '',
};

export default Icon;
