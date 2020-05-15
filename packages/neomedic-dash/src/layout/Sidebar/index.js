import React from 'react';

import Logo from 'neomedic-assets/svgs/logo.svg';
import { bool } from 'prop-types';

import User from '../../assets/images/user.jpg';
import routes from './routes';
import {
  Name,
  Item,
  Image,
  Profile,
  Picture,
  Article,
  NavIcon,
  Navigation,
} from './styles';

const Sidebar = ({ full }) => (
  <Article full={full}>
    <Image
      src={Logo}
      alt="Neo Medic"
    />

    {/**
     * <Navigation>
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
     */}

    <Profile to="/profile">
      <Picture src={User} />
      <Name>Carolina Alves</Name>
    </Profile>
  </Article>
);

Sidebar.propTypes = {
  full: bool,
};

Sidebar.defaultProps = {
  full: false,
};

export default Sidebar;
