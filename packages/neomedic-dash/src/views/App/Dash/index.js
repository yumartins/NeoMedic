import React, { useState, useEffect } from 'react';

import { api } from 'neomedic-authorization';

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
  Category,
  SubTitle,
  Container,
  HeadCategory,
  TitleCategory,
} from './styles';

const Dashboard = () => {
  const [medics, onMedics] = useState(null);

  useEffect(() => {
    const getMedics = async () => {
      const { data } = await api.get('/medic');
      onMedics(data);
    };

    getMedics();
  }, []);

  console.log(medics);

  return (
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

        <Category>
          <HeadCategory>
            <TitleCategory>Médicos em destaques</TitleCategory>
          </HeadCategory>

          <Cards>
            {medics !== null
              ? medics.content.map(({ id, name, specialization }) => (
                <CardDoctor
                  key={id}
                  name={name}
                  profession={specialization.name}
                />
              ))
              : <h1>Loading</h1>}
          </Cards>
        </Category>
      </Container>
    </View>
  );
};

export default Dashboard;
