import React from 'react';
import MapBox from '../../components/MapBox';
import { Title } from './styles';
import Container from '../../layout/Container';

const Dashboard = () => (
  <Container title="Dashboard">
    <MapBox />
  </Container>
);

export default Dashboard;
