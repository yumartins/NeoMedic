import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form } from '@unform/web';
import Image from 'neomedic-assets/svgs/logo.svg';
import { useAuth } from 'neomedic-authorization';
import * as Yup from 'yup';

import Input from '../../components/Form/Input';
import {
  Head,
  Logo,
  View,
  Title,
  Action,
  Recovery,
  InputForm,
  Container,
  Ilustation,
  RecoveryLink,
} from './styles';

const headings = [
  'Entrar',
  'Cadastrar',
];

const SignIn = () => {
  const [loading, onLoading] = useState(false);
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
    try {
      const schema = Yup.object().shape({
        username: Yup.string().required('Não esqueça o nome de usuário =)'),
        password: Yup.string().required('Não esqueça a senha =)'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      onLoading(! loading);
      await run('login', data.username, data.password)
        .then(() => navigate('/'))
        .catch(() => onLoading(false));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        ref.current.setErrors(errorMessages);
      }
    }
  };

  const inputs = [
    {
      name: 'username',
      label: 'Nome de usuário',
      reveal: true,
    },
    {
      name: 'password',
      label: 'Senha',
      reveal: true,
    },
    {
      name: 'state',
      label: 'Qual o seu estado?',
      reveal: selected === 'Cadastrar',
    },
    {
      name: 'city',
      label: 'Qual a sua cidade?',
      reveal: selected === 'Cadastrar',
    },
  ];

  return (
    <View>
      <Container>

        <Logo
          src={Image}
          alt="NeoMedic"
        />

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
          {inputs.map(({ name, label, reveal }) => (
            <InputForm
              key={name}
              reveal={reveal}
            >
              <Input
                name={name}
                label={label}
                type={name === 'password' ? 'password' : 'text'}
              />
            </InputForm>
          ))}

          <Action
            submit
            label={selected}
            loading={loading}
          />
        </Form>

        <Recovery>
          Esqueceu a senha?
          <RecoveryLink to="/recovery">
            Clique aqui
          </RecoveryLink>
        </Recovery>
      </Container>

      <Ilustation />
    </View>
  );
};

export default SignIn;
