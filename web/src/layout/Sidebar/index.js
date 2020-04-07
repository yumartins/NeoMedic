import React from 'react';
import { Article, Image } from './styles';
import Logo from '../../assets/logo.svg';
import { Icon, activity } from '../../components/Icon';

const Sidebar = () => (
  <Article>
    <Image
      src={Logo}
      alt="Neo Medic"
    />

    <Icon name={activity}/>
  </Article>
);

export default Sidebar;
