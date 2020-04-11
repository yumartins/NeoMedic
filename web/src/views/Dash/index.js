import React from 'react';
import { Form } from '@unform/web';
import MapBox from '../../components/MapBox';
import Input from '../../components/Form/Input';
import Sidebar from '../../layout/Sidebar';
import {
  View,
  Head,
  Title,
  SubTitle,
  Container,
} from './styles';

const Dashboard = () => (
  <View>
    <Sidebar />

    <Container>
      <Head>
        <SubTitle>Agende uma</SubTitle>
        <Title>Consulta</Title>
      </Head>

      <Form>
        <Input
          name="search"
          label="Pesquisar"
          hasSearch
        />
      </Form>
    </Container>
    <MapBox />
  </View>
);

export default Dashboard;
