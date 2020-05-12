import React from 'react';
import { bool } from 'prop-types';
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
import Logo from '../../assets/images/logo.svg';
import routes from './routes';
import User from '../../assets/images/user.jpg';

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
