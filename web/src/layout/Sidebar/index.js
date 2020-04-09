import React from 'react';
import {
  Item,
  Image,
  Article,
  NavIcon,
  Navigation,
} from './styles';
import Logo from '../../assets/images/logo.svg';
import routes from './routes';

const Sidebar = () => (
  <Article>
    <Image
      src={Logo}
      alt="Neo Medic"
    />

    <Navigation>
      {routes.map(({ route, label, icon }) => (
        <Item
          to={route}
          key={label}
        >
          <NavIcon name={icon} />
          {label}
        </Item>
      ))}
    </Navigation>
  </Article>
);

export default Sidebar;
