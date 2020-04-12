import React from 'react';
import { Form } from '@unform/web';
import MapBox from '../../components/MapBox';
import Input from '../../components/Form/Input';
import Sidebar from '../../layout/Sidebar';
import Button from '../../components/Button';
import { map } from '../../components/Icon';
import {
  View,
  Head,
  Left,
  Right,
  Title,
  SubTitle,
  Container,
} from './styles';

const Dashboard = () => (
  <View>
    <Sidebar full />

    <Container full>
      <Head>
        <Left>
          <SubTitle>Agende uma</SubTitle>
          <Title>Consulta</Title>
        </Left>

        <Right>
          <Button
            icon={map}
            label="Pesquisa avançada"
            appearence="primary"
          />
        </Right>
      </Head>

      <Form>
        <Input
          name="search"
          label="Pesquisar"
          hasSearch
        />
      </Form>
    </Container>
  </View>
);

export default Dashboard;
