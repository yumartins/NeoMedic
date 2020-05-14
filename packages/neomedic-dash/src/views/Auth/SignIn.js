import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form } from '@unform/web';
import { api, useAuth } from 'neomedic-authorization';

import Input from '../../components/Form/Input';

const SignIn = () => {
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
    <div>
      <h1>SignIn</h1>
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
    </div>
  );
};

export default SignIn;
