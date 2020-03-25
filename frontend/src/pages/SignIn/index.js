import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FiLogIn } from 'react-icons/fi';

import Loading from '~/components/Loading';
import Input from '~/components/Input';
import Button from '~/components/Button';

import { signInRequest } from '~/store/modules/auth/actions';

import heroesImg from '~/assets/heroes.png';
import logo from '~/assets/logo.svg';

import { Container, Form } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [id, setId] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(signInRequest(id));
  };

  return (
    <Container>
      <section className="form">
        <img src={logo} alt="Heroes" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input
            id="id"
            name="id"
            placeholder="Sua ID"
            value={id}
            onChange={({ target }) => setId(target.value)}
          />
          <Button type="submit">{loading ? <Loading /> : 'Entrar'}</Button>
          <Link to="/register" id="register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
