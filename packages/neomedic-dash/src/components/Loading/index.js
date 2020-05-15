import React from 'react';

import { string } from 'prop-types';

import { Dot, Dots } from './styles';

const Loading = ({ type }) => (
  <Dots type={type}>
    <Dot />
    <Dot />
    <Dot />
  </Dots>
);

Loading.propTypes = {
  type: string,
};

Loading.defaultProps = {
  type: 'primary',
};

export default Loading;
