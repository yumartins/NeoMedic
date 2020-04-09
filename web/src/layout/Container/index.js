import React from 'react';
import {
  Head,
  Name,
  Link,
  Title,
  Profile,
  Article,
  Picture,
  Content,
} from './styles';
import { string } from 'prop-types';
import User from '../../assets/images/user.jpg';

const Container = ({
  title,
  children,
}) => (
  <Article>
    <Head>
      <Title>{title}</Title>

      <Profile to="/profile">
        <Picture src={User} />
        <Content>
          <Name>Carolina Alves</Name>
          <Link>Ver meu perfil</Link>
        </Content>
      </Profile>

    </Head>
    {children}
  </Article>
);

Container.propTypes = {
  title: string.isRequired,
};

export default Container;
