import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form } from '@unform/web';
import { api, useAuth } from 'neomedic-authorization';

import Input from '../../components/Form/Input';
import {
  Head,
  View,
  Title,
  Container,
  Ilustation,
} from './styles';

const headings = [
  'Entrar',
  'Cadastrar',
];

const SignIn = () => {
  const [selected, onSelected] = useState(headings[0]);

  const ref = useRef(null);

  const {
    run,
  } = useAuth();

  const navigate = useNavigate();

  /**
   * Handle login attempt.
   */
  const handleSubmit = async (data) => {
    const response = await api.post('/login', data);

    console.log(response);

    navigate('/');
  };

  return (
    <View>
      <Container>
        <Head>
          {headings.map((value) => (
            <Title
              key={value}
              selected={value === selected}
              onClick={() => onSelected(value)}
            >
              {value}
            </Title>
          ))}
        </Head>
        <Form
          ref={ref}
          onSubmit={handleSubmit}
        >
          <Input
            name="username"
            label="Usuário"
          />
          <Input
            name="password"
            label="Senha"
            type="password"
          />

          <button type="submit">
            Entrar
          </button>
        </Form>
      </Container>

      <Ilustation />
    </View>
  );
};

export default SignIn;
