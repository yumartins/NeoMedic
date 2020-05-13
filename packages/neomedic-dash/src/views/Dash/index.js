import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Form/Input';
import { arrowIosForward } from '../../components/Icon';
import MapBox from '../../components/MapBox';
import Sidebar from '../../layout/Sidebar';
import {
  List,
  View,
  Head,
  Left,
  Card,
  Cards,
  Right,
  Title,
  Search,
  ListItem,
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

      <List>
        <ListItem>Cardiologista</ListItem>
        <ListItem>Dermatologista</ListItem>
        <ListItem>Cirurgião Plástico</ListItem>
        <ListItem>Ginecologista</ListItem>
        <ListItem>Psiquiatra</ListItem>
        <ListItem>Ortopedista</ListItem>
      </List>

      <Cards>
        <Card to="/doctor">

          <h1>Olá</h1>
        </Card>
      </Cards>
    </Container>
  </View>
);

export default Dashboard;
