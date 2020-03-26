import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';

import Loading from '~/components/Loading';
import Input from '~/components/Input';
import Button from '~/components/Button';

import logo from '~/assets/logo.svg';
import logoDark from '~/assets/logo-dark.svg';

import api from '~/services/api';

import { Container, Content, Form, TextArea } from './styles';

export default function NewIncident() {
  const { title: themeTitle } = useContext(ThemeContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post('/incidents', { title, description, value });
      toast.success('Caso adicionado com sucesso');
      history.push('/profile');
    } catch (err) {
      toast.error(
        (err.response && err.response.data.error) ||
          'Erro de comunicação com o servidor'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Content>
        <section>
          <img src={themeTitle === 'light' ? logo : logoDark} alt="Heroes" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to="/" id="back">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <Form onSubmit={handleSubmit}>
          <Input
            id="title"
            name="title"
            placeholder="Título do caso"
            required
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
          <TextArea
            id="description"
            name="description"
            placeholder="Descrição"
            required
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
          <Input
            id="value"
            name="value"
            placeholder="Valor em reais"
            required
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
          <Button type="submit">{loading ? <Loading /> : 'Cadastrar'}</Button>
        </Form>
      </Content>
    </Container>
  );
}
