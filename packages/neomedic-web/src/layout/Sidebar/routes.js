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

export default routes;
