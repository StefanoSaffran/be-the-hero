import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import * as Yup from 'yup';

import { FiLogIn } from 'react-icons/fi';

import Loading from '~/components/Loading';
import Input from '~/components/Input';
import Button from '~/components/Button';

import { signInRequest } from '~/store/modules/auth/actions';

import heroesImg from '~/assets/heroes.png';
import logo from '~/assets/logo.svg';
import logoDark from '~/assets/logo-dark.svg';

import { Container, Unform } from './styles';

export default function SignIn() {
  const formRef = useRef(null);
  const { title } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = async data => {
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        id: Yup.string().required('O campo ID obrigatório.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(signInRequest(data.id));
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <Container>
      <section className="form">
        <img src={title === 'light' ? logo : logoDark} alt="Heroes" />
        <Unform onSubmit={handleSubmit} ref={formRef}>
          <h1>Faça seu logon</h1>
          <Input id="id" name="id" placeholder="Sua ID" />
          <Button type="submit">{loading ? <Loading /> : 'Entrar'}</Button>
          <Link to="/register" id="register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </Unform>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
