import React from 'react';
import MapBox from '../../components/MapBox';
import {
  View,
  Head,
  Title,
  SubTitle,
  Container,
} from './styles';

const Dashboard = () => (
  <View>
    <Container>
      <Head>
        <SubTitle>Agende uma</SubTitle>
        <Title>Consulta</Title>
      </Head>
    </Container>
    <MapBox />
  </View>
);

export default Dashboard;
