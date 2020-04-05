import React from 'react';
import { Article, Image } from './styles';
import Logo from '../../assets/logo.svg';
import Icon from '../../components/Icon';

const Sidebar = () => (
  <Article>
    <Image
      src={Logo}
      alt="Neo Medic"
    />

    <Icon name="alert-triangle" />
  </Article>
);

export default Sidebar;
