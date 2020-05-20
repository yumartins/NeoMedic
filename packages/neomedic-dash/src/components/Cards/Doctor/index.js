import React from 'react';

import { string } from 'prop-types';

import { person } from '../../Icon';
import {
  View,
  Name,
  Image,
  IconUser,
  Profession,
} from './styles';

const Doctor = ({
  name,
  image,
  profession,
}) => (
  <View>
    {image
      ? <Image src={image} />
      : <IconUser name={person} />}
    <Name>{name}</Name>
    <Profession>{profession}</Profession>
  </View>
);

Doctor.propTypes = {
  name: string.isRequired,
  image: string,
  profession: string.isRequired,
};

Doctor.defaultProps = {
  image: '',
};

export default Doctor;
