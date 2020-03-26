import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { FiArrowLeft } from 'react-icons/fi';

import Loading from '~/components/Loading';
import Input from '~/components/Input';
import Button from '~/components/Button';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';
import logoDark from '~/assets/logo-dark.svg';

import { Container, Content, Form } from './styles';

export default function SignIn() {
  const { title } = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(signUpRequest(name, email, whatsapp, city, uf));
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
        <Form onSubmit={handleSubmit}>
          <Input
            id="ngo"
            name="ngo"
            placeholder="Nome da ONG"
            required
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <Input
            id="email"
            name="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <Input
            id="whatsapp"
            name="whatsapp"
            placeholder="WhatsApp"
            required
            value={whatsapp}
            onChange={({ target }) => setWhatsapp(target.value)}
          />
          <div className="input-group">
            <Input
              id="city"
              name="city"
              placeholder="Cidade"
              required
              value={city}
              onChange={({ target }) => setCity(target.value)}
            />
            <Input
              id="uf"
              name="uf"
              placeholder="UF"
              required
              value={uf}
              onChange={({ target }) => setUf(target.value)}
            />
          </div>
          <Button type="submit">{loading ? <Loading /> : 'Cadastrar'}</Button>
        </Form>
      </Content>
    </Container>
  );
}
