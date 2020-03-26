import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { FiLogIn } from 'react-icons/fi';

import Loading from '~/components/Loading';
import Input from '~/components/Input';
import Button from '~/components/Button';

import { signInRequest } from '~/store/modules/auth/actions';

import heroesImg from '~/assets/heroes.png';
import logo from '~/assets/logo.svg';
import logoDark from '~/assets/logo-dark.svg';

import { Container, Form } from './styles';

export default function SignIn() {
  const { colors, title } = useContext(ThemeContext);
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
        <img src={title === 'light' ? logo : logoDark} alt="Heroes" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input
            autocomplete="off"
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
