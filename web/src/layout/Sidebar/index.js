import React from 'react';
import {
  Name,
  Item,
  Image,
  Picture,
  Article,
  NavIcon,
  Profile,
  Navigation,
} from './styles';
import Logo from '../../assets/images/logo.svg';
import routes from './routes';
import User from '../../assets/images/user.jpg';

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

    <Profile>
      <Picture src={User} />
      <Name>Carolina Alves</Name>
    </Profile>
  </Article>
);

export default Sidebar;
