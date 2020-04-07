import React from 'react';
import { Article, NavIcon, Image, Navigation, Item } from './styles';
import Logo from '../../assets/logo.svg';
import { book, layout, messageCircle } from '../../components/Icon';

const routes = [
  {
    icon: layout,
    route: '/',
    label: 'Dashboard',
  },
  {
    icon: book,
    route: 'books',
    label: 'Agendar consultas',
  },
  {
    icon: messageCircle,
    route: '/messages',
    label: 'Conversas',
  },
];

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
