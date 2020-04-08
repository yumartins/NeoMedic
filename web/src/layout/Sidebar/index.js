import React from 'react';
import {
  Name,
  Link,
  Item,
  Image,
  Content,
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

    <Profile to="/profile">
      <Picture src={User} />
      <Content>
        <Name>Carolina Alves</Name>
        <Link>Ver meu perfil</Link>
      </Content>
    </Profile>
  </Article>
);

export default Sidebar;
