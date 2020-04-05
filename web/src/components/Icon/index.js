import React from 'react';
import IconFont from './styles';
import { string } from 'prop-types';

const Icon = ({ name }) => (
  <IconFont className={`icon icon-${name}`} />
);

Icon.propTypes = {
  name: string.isRequired,
};

export default Icon;
