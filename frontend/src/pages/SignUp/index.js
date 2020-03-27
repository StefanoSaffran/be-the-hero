import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import * as Yup from 'yup';

import { FiArrowLeft } from 'react-icons/fi';

import Loading from '~/components/Loading';
import Input from '~/components/Input';
import Button from '~/components/Button';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';
import logoDark from '~/assets/logo-dark.svg';

import { Container, Content, Unform } from './styles';

export default function SignIn() {
  const formRef = useRef(null);
  const { title } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = async data => {
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome da ong é obrigatório.'),
        email: Yup.string()
          .email()
          .required('O e-mail é obrigatório.'),
        whatsapp: Yup.string()
          .max(13, 'Maximo de 13 números')
          .required('O campo whatsapp é obrigatório.'),
        city: Yup.string().required('A cidade é obrigatória.'),
        uf: Yup.string()
          .matches(/[A-Za-z]{2}/, 'UF inválido')
          .required('A campo UF é obrigatória.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { name, email, whatsapp, city, uf } = data;
      dispatch(signUpRequest(name, email, whatsapp, city, uf));
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
      <Content>
        <section>
          <img src={title === 'light' ? logo : logoDark} alt="Heroes" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link to="/" id="back">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o logon
          </Link>
        </section>
        <Unform onSubmit={handleSubmit} ref={formRef}>
          <Input id="ngo" name="name" placeholder="Nome da ONG" />
          <Input id="email" name="email" placeholder="E-mail" />
          <Input id="whatsapp" name="whatsapp" placeholder="WhatsApp com DDD" />
          <div className="input-group">
            <Input id="city" name="city" placeholder="Cidade" />
            <Input id="uf" name="uf" placeholder="UF" />
          </div>
          <Button type="submit">{loading ? <Loading /> : 'Cadastrar'}</Button>
        </Unform>
      </Content>
    </Container>
  );
}
