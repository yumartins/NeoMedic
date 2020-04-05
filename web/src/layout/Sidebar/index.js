import React from 'react';
import { Article, Image } from './styles';
import Logo from '../../assets/logo.svg';

const Sidebar = () => (
  <Article>
    <Image
      src={Logo}
      alt="Neo Medic"
    />
  </Article>
);

export default Sidebar;
