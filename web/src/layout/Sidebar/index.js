import React from 'react';
import { Article, Image, Navigation, Item } from './styles';
import Logo from '../../assets/logo.svg';
import { Icon, book, layout, messageCircle } from '../../components/Icon';

const routes = [
  {
    icon: layout,
    route: '/',
    label: 'Dashboard',
  },
  {
    icon: book,
    route: 'books,',
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
      {routes.map((item) => (
        <Item
          to={item.route}
          key={item.label}
        >
          <Icon name={item.icon} />
          {item.label}
        </Item>
      ))}
    </Navigation>
  </Article>
);

export default Sidebar;
