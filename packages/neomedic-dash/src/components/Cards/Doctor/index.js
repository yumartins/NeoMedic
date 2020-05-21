import React from 'react';

import { string } from 'prop-types';

import { person } from '../../Icon';
import {
  View,
  Name,
  Image,
  Content,
  ViewIcon,
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
      : (
        <ViewIcon>
          <IconUser name={person} />
        </ViewIcon>
      )}
    <Content>
      <Name>{name}</Name>
      <Profession>{profession}</Profession>
    </Content>
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
