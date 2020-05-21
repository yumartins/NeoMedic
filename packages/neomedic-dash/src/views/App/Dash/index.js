import React from 'react';

import Button from '../../../components/Button';
import CardDoctor from '../../../components/Cards/Doctor';
import Input from '../../../components/Form/Input';
import { arrowIosForward } from '../../../components/Icon';
import MapBox from '../../../components/MapBox';
import Sidebar from '../../../layout/Sidebar';
import {
  View,
  Head,
  Left,
  Cards,
  Right,
  Title,
  Search,
  SubTitle,
  Container,
} from './styles';

const Dashboard = () => (
  <View>
    <Sidebar full />

    <Container full>
      <Head>
        <Left>
          <SubTitle>Agenda uma consulta com</SubTitle>
          <Title>Médicos especializados</Title>
        </Left>

        <Right>
          <Button
            icon={arrowIosForward}
            label="Pesquisa avançada"
            appearence="primary"
          />
        </Right>
      </Head>

      <Search>
        <Input
          name="search"
          label="Pesquisar"
          hasSearch
        />
      </Search>

      <Cards>
        <CardDoctor
          name="Dr. Yuri Martins"
          profession="Cardiologista"
        />
      </Cards>
    </Container>
  </View>
);

export default Dashboard;
