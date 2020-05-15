import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form } from '@unform/web';
import { useAuth } from 'neomedic-authorization';

import {
  Head,
  View,
  Title,
  Action,
  InputForm,
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
    await run('login', data.username, data.password);

    navigate('/dashboard');
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
          <InputForm
            name="username"
            label="Usuário"
          />

          <InputForm
            name="password"
            label="Senha"
            type="password"
          />

          {selected === 'Cadastrar' && (
            <>
              <InputForm
                name="state"
                label="Qual o seu estado?"
              />

              <InputForm
                name="city"
                label="Qual a sua cidade?"
              />
            </>
          )}

          <Action
            submit
            label={selected}
          />
        </Form>
      </Container>

      <Ilustation />
    </View>
  );
};

export default SignIn;
