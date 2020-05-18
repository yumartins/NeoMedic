import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  Error,
  Title,
  Action,
  Recovery,
  InputForm,
  Container,
  Ilustation,
  RecoveryLink,
} from './styles';

const SignIn = () => {
  const { t } = useTranslation('dash');

  const headings = [
    t('auth.headers.signIn'),
    t('auth.headers.signUp'),
  ];

  const [error, onError] = useState('');
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
        username: Yup.string().required(t('auth.errors.username')),
        password: Yup.string().required(t('auth.errors.password')),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      onLoading(! loading);
      await run('login', data.username, data.password)
        .then(() => navigate('/'))
        .catch(() => {
          onLoading(false);
          onError(t('auth.errors.general'));

          setTimeout(() => onError(''), 4000);
        });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((errors) => {
          errorMessages[errors.path] = errors.message;
        });

        ref.current.setErrors(errorMessages);
      }
    }
  };

  const inputs = [
    {
      name: 'username',
      label: t('auth.inputs.name'),
      reveal: true,
    },
    {
      name: 'password',
      label: t('auth.inputs.password'),
      reveal: true,
    },
    {
      name: 'state',
      label: t('auth.inputs.state'),
      reveal: selected === 'Cadastrar',
    },
    {
      name: 'city',
      label: t('auth.inputs.city'),
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

          {error.length > 0 && (
            <Error>{error}</Error>
          )}
        </Form>

        <Recovery>
          {t('auth.recovery.value')}
          <RecoveryLink to="/recovery">
            {t('auth.recovery.action')}
          </RecoveryLink>
        </Recovery>
      </Container>

      <Ilustation />
    </View>
  );
};

export default SignIn;
